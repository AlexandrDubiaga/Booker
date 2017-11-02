<?php
include('../../app/lib/EmployeesModel.php');
class Employees extends RestServer
{
    private $lib;
    public function __construct()
    {
        $this->lib = new EmployeesModel();
        $this->run();
    }
    public function getEmployees($param)
    {
        $result = $this->lib->checkEmployees($param);
      
        return $result;
    }
    public function postEmployees($url,$param)
    {
        $result = $this->lib->addEmployees($url,$param);
        return $result;
    }
    public function putEmployees($url,$data)
    {
        $result = $this->lib->updateEmployees($url,$data);
        return $result;
    }
}
$cars = new Employees();
