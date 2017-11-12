<?php
include('../../app/lib/RoomsModel.php');

/**
 * Class Rooms
 */
class Rooms extends RestServer
{
    private $lib;

    /**
     * Rooms constructor.
     */
    public function __construct()
    {
        $this->lib = new RoomsModel();
        $this->run();
    }

    /**
     * @param $param
     * @return bool|string
     */
    public function getRooms($param)
    {
        $result = $this->lib->getRooms($param);
        return $result;
    }

}
$cars = new Rooms();
