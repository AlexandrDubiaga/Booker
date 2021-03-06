<?php
include ('../../app/RestServer.php');

/**
 * Class UsersModel
 */
class UsersModel extends RestServer
{
    private $link;

    /**
     * UsersModel constructor.
     */

    public function __construct()
    {
        parent::__construct();
        $this->link = $this->db;
    }

    /**
     * @param bool $param
     * @return bool|string
     */
    public function checkUsers($param=false)
    {
        $id = $this->link->quote(($param[0]));
        $sql = "SELECT u.id, u.hash, u.login, r.name as role FROM users u LEFT JOIN roles r ON u.id_role=r.id WHERE u.id=".$id;
        $sth = $this->link->prepare($sql);
        $result = $sth->execute();
        if (false === $result)
        {
           return false;
        }
        $data = $sth->fetchAll(PDO::FETCH_ASSOC);
        if (empty($data))
        {
            return false;
        }
        $str = json_encode($data);
        return $str;
    }

    /**
     * @param $url
     * @param $param
     * @return bool|string
     */

    public function loginUser($url,$param)
    {
        $login = $this->link->quote($param['login']);
        $pass = $param['pass'];
        $id = '';
        $role = '';
        $sql = "SELECT u.id, r.name as role,u.pass FROM users u LEFT JOIN roles r ON u.id_role=r.id WHERE login=". $login;
        $sth = $this->link->prepare($sql);
        $result = $sth->execute();
        if (false === $result)
        {
            return false;
        }
        $data = $sth->fetchAll(PDO::FETCH_ASSOC);
        if (empty($data))
        {
            return false;
        }
        if (is_array($data))
        {
            foreach ($data as $val)
            {
                if ($pass !== $val['pass'])
                {
                    return false;
                } else
                {
                    $id = $this->link->quote($val['id']);
                    $role = $val['role'];
                }
            }
        }else
        {
            return false;
        }
        $hash = $this->link->quote(md5($this->generateHash(10)));
        $sql = 'UPDATE users SET hash=' . $hash . ' WHERE id=' . $id;
        $count = $this->link->exec($sql);
        if ($count === false)
        {
            return false;
        }
        $id = trim($id, "'");
        $hash = trim($hash, "'");
        $login = trim($login, "'");
        $arrRes = array('id'=>$id, 'login'=>$login, 'hash'=>$hash, 'role'=>$role);
        $str = json_encode($arrRes);
        return $str;
    }

    /**
     * @param int $length
     * @return string
     */

    function generateHash($length=6)
    {
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHI JKLMNOPRQSTUVWXYZ0123456789";
        $code = "";
        $clen = strlen($chars) - 1;
        while (strlen($code) < $length)
        {
            $code .= $chars[mt_rand(0,$clen)];
        }
        return $code;
    }

    /**
     * @param $id
     * @param $url
     * @return bool
     */
    public function deleteUser($id,$url)
    {
        $idUser = $this->link->quote($id[0]);
        $sql = "DELETE FROM users WHERE id = ".$idUser;
        $count = $this->link->exec($sql);
        if($count)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
