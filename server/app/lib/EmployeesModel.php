<?php
include ('../../app/RestServer.php');

/**
 * Class EmployeesModel
 */
class EmployeesModel extends RestServer
{
    private $link;

    /**
     * EmployeesModel constructor.
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
    public function checkEmployees($param=false)
    {
        if($param[0] == "") {
           $sql = "SELECT users.hash, users.email, users.login,users.id, r.name as role FROM users  LEFT JOIN roles r ON users.id_role=r.id";
           $sth = $this->link->prepare($sql);
           $result = $sth->execute();
           if (false === $result) {
                return false;
           }
           $data = $sth->fetchAll(PDO::FETCH_ASSOC);
            if (empty($data)) {
                return false;
            }
            $str = json_encode($data);
            return $str;
        }
    }

    /**
     * @param $url
     * @param $param
     * @return bool|int
     */
    public function addEmployees($url,$param)
    {
        $emailChange = str_replace("%40", "@", $param['email']);
        if (isset($param['login']) && isset($param['pass']) && isset($emailChange)) {
            if (!empty($param['login']) && !empty($param['pass']) && !empty($emailChange)) {
                $login = $this->link->quote($param['login']);
                $pass = $this->link->quote($param['pass']);
                $email = $this->link->quote($emailChange);
                $hash = "firstHash";
                $hash = $this->link->quote($hash);
                $sql = "INSERT INTO users (login, pass, email, hash) VALUES (" . $login . ", " . $pass . "," . $email . "," . $hash . ")";
                $count = $this->link->exec($sql);
                if ($count === false) {
                    return false;
                }
                return $count;

            } else {
                return false;
            }
        } else {
            return false;
        }
        return false;
    }

    /**
     * @param $url
     * @param $param
     * @return bool
     */
    public function updateEmployees($url,$param)
    {
        if(isset($param['login']) && isset($param['id']) && isset($param['email']))
        {
            if (!empty($param['login']) && !empty($param['id']) && !empty($param['email']))
            {
                $id = $this->link->quote($param['id']);
                $login = $this->link->quote($param['login']);
                $email = $this->link->quote($param['email']);
                $sql = 'UPDATE users SET login=' . $login . ', email=' . $email . ' WHERE id=' . $id;
                $count = $this->link->exec($sql);
                if ($count === false)
                {
                    return false;
                } else
                {
                    return true;
                }
            }else
            {
                return false;
            }
        }else
        {
            return false;
        }

    }

}
