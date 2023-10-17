<!DOCTYPE html>
<html lang="">
<body>


<?php

$miles = 70;
//number to be converted
$kilometer = 1.60934;
//1 mile is 1.60934
$result = $miles * $kilometer;
echo $result;
?>
<br>
<?php
$celsius = 25;
//number to be converted
$answer = ($celsius * (9/5)) + 32;

echo $answer;

$name1 = "Paul";
$name2 = "Deniz";
$name3 = "Bob";
$name4 = "David";
$name5 = "Holly";

echo "<li>$name1</li>";
echo "<li>$name2</li>";
echo "<li>$name3</li>";
echo "<li>$name4</li>";
echo "<li>$name5</li>";

echo "<p>The first person is called " . $name1 . ". </p>";

$number = 1;
$bul = true;

if($number == 0){
    echo "<p>this is not True </p>";

    }elseif($number == 1){
    echo "<p>This is ".$bul.".</p>";
}else{
    echo "<p>try again.</p>";
}

if($number < 1 xor $number >0){
    echo "<P>One of these statements is true.<p/>";
}

while($number <= 10){
    echo "<p>The number is: ".$number.".</p>";
    $number++;
}
$i = 1;
for($i; $i <= 10; $i++ ){
    echo "<p>The number is ".$i.".</p>";

}

?>

</body>
</html>