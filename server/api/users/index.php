<?php
include('../../app/lib/UsersModel.php');

/**
 * Class Users
 */
class Users extends RestServer
{
    private $lib;

    /**
     * Users constructor.
     */
    public function __construct()
    {
        $this->lib = new UsersModel();
        $this->run();
    }

    /**
     * @param $param
     * @return bool|string
     */
    public function getUsers($param)
    {
        $result = $this->lib->checkUsers($param);
      
        return $result;
    }

    /**
     * @param $url
     * @param $param
     * @return mixed
     */
    public function postUsers($url,$param)
    {
        $result = $this->lib->addUser($url,$param);
        return $result;
    }

    /**
     * @param $url
     * @param $data
     * @return bool|string
     */
    public function putUsers($url,$data)
    {
        $result = $this->lib->loginUser($url,$data);
        return $result;
    }

    /**
     * @param $url
     * @param $data
     * @return bool
     */
    public function deleteUsers($url,$data)
    {
        $result = $this->lib->deleteUser($url,$data);
        return $result;
    }
}
$cars = new Users();
