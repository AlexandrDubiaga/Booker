<?php
include('../../app/lib/EventsModel.php');
class Events extends RestServer
{
    private $lib;
    public function __construct()
    {
        $this->lib = new EventsModel();
        $this->run();
    }
    public function getEvents($param)
    {
        $result = $this->lib->checkEvent($param);
      
        return $result;
    }
    public function postEvents($url,$param)
    {
        $result = $this->lib->addEvent($url,$param);
        return $result;
    }
    public function putEvents($url,$data)
    {
        $result = $this->lib->updateEvent($url,$data);
        return $result;
    }
}
$cars = new Events();
