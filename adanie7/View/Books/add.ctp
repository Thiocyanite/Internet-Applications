<h1>Dodaj książkę</h1>
<?php
  $options = array('dramat' =>'dramat', 'komedia' =>'komedia');
  echo $this->Form->create('Book');
  echo $this->Form->input('title');
  echo $this->Form->input('author');
  echo $this->Form->input('genre',
      array('options'=>$options, 'default'=>'dramat'));
  echo $this->Form->end('Zapisz');
?>
