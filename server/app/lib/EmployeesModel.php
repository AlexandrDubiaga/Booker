<?php
include ('../../app/RestServer.php');
class EmployeesModel extends RestServer
{
    private $link;

    public function __construct()
    {
        parent::__construct();
        $this->link = $this->db;
    }

    public function checkEmployees($param=false)
    {
        $sql = "SELECT employee.hash, employee.email, employee.login,employee.id, r.name as role FROM users employee LEFT JOIN roles r ON employee.id_role=r.id";
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
    public function addEmployees($url,$param)
    {
        $login = $this->link->quote($param['login']);
        $pass = md5(md5(trim($_POST['pass'])));
        $pass = $this->link->quote($pass);
        $email = $this->link->quote($param['email']);
        $hash = "firstHash";
        $hash = $this->link->quote($hash);
        $sql = "INSERT INTO users (login, pass, email, hash) VALUES (".$login.", ".$pass.",".$email.",".$hash.")";
        $count = $this->link->exec($sql);
        if ($count === false)
        {
            return false;
        }
        return $count;
    }
    public function updateEmployees($id,$param)
    {
        //var_dump("Hello update");
        echo $id[0];
        //var_dump($url);
        /*$login = $this->link->quote($param['login']);
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
        if (is_array($data)) {
            foreach ($data as $val) {
                if ($pass !== $val['pass']) {
                    return false;
                } else {
                    $id = $this->link->quote($val['id']);
                    $role = $val['role'];

                }
            }

        } else {
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
        return $str;*/


    }


}
