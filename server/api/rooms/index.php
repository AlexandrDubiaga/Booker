<?php
include('../../app/lib/RoomsModel.php');
class Rooms extends RestServer
{
    private $lib;
    public function __construct()
    {
        $this->lib = new RoomsModel();
        $this->run();
    }
    public function getRooms($param)
    {
        $result = $this->lib->getRooms($param);
        return $result;
    }

}
$cars = new Rooms();
