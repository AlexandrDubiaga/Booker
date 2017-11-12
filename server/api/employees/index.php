<?php
include('../../app/lib/EmployeesModel.php');

/**
 * Class Employees
 */
class Employees extends RestServer
{
    private $lib;

    /**
     * Employees constructor.
     */
    public function __construct()
    {
        $this->lib = new EmployeesModel();
        $this->run();
    }

    /**
     * @param $param
     * @return bool|string
     */
    public function getEmployees($param)
    {
        $result = $this->lib->checkEmployees($param);
        return $result;
    }

    /**
     * @param $url
     * @param $param
     * @return bool|int
     */
    public function postEmployees($url,$param)
    {
        $result = $this->lib->addEmployees($url,$param);
        return $result;
    }

    /**
     * @param $url
     * @param $data
     * @return bool
     */
    public function putEmployees($url,$data)
    {
        $result = $this->lib->updateEmployees($url,$data);
        return $result;
    }
}
$cars = new Employees();
