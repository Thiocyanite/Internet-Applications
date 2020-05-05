<?php
App::uses('AppModel', 'Model');
/**
 * Employee Model
 *
 */
class Employee extends AppModel {

  public $validate = array(
    'nazwisko' => array('notBlank' => array('rule' => array('notBlank'))),
    'etat' => array('notBlank' => array('rule' => array('notBlank'))),
    'placa_pod' => array('rule' => array('range', 0, 2000))
  );

}
