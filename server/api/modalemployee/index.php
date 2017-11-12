<?php
include('../../app/lib/AdminsModel.php');

/**
 * Class Admins
 */
class Admins extends RestServer
{
    private $lib;

    /**
     * Admins constructor.
     */
    public function __construct()
    {
        $this->lib = new AdminsModel();
        $this->run();
    }

    /**
     * @param $param
     * @return bool|string
     */
    public function getModalemployee($param)
    {
        $result = $this->lib->checkAdmins($param);
        return $result;
    }

}
$cars = new Admins();
