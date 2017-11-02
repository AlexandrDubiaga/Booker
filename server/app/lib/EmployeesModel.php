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
 echo "update";
      var_dump($id);
        var_dump($param);


    }


}
