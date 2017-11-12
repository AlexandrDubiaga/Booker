<?php
include('../../app/lib/EventsModel.php');

/**
 * Class Events
 */
class Events extends RestServer
{
    private $lib;

    /**
     * Events constructor.
     */
    public function __construct()
    {
        $this->lib = new EventsModel();
        $this->run();
    }

    /**
     * @param $param
     * @return bool|string
     */
    public function getEvents($param)
    {
        $result = $this->lib->checkEvent($param);
      
        return $result;
    }

    /**
     * @param $url
     * @param $param
     * @return bool|int
     */
    public function postEvents($url,$param)
    {
        $result = $this->lib->addEvent($url,$param);
        return $result;
    }

    /**
     * @param $url
     * @param $data
     * @return bool|int
     */
    public function putEvents($url,$data)
    {
        $result = $this->lib->updateEvent($url,$data);
        return $result;
    }

    /**
     * @param $url
     * @param $data
     * @return bool
     */
    public function deleteEvents($url,$data)
    {
        $result = $this->lib->deleteEvent($url,$data);
        return $result;
    }

}
$cars = new Events();
