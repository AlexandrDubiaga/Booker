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
        $pass = $this->link->quote($param['pass']);
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
    public function updateEmployees($url,$param)
    {
          $id = $this->link->quote($param['id']);
          $login = $this->link->quote($param['login']);
          $email = $this->link->quote($param['email']);
          $sql = 'UPDATE users SET login=' . $login . ', email='.$email .' WHERE id=' . $id;
          $count = $this->link->exec($sql);
            if ($count === false)
            {
                return false;
            }
        else
        {
            return true;
        }
       


    }


}
