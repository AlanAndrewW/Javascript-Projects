function my_Dictionary() {
    var Robot = {
        Model:"Dozer",
        Color:"Red",
        Year:2024,
        Functions:"Crushes",
        Movement:"Rolls"
    };
    delete Robot.Model;//removing Model KVP from dictionary before its displayed
    document.getElementById("Dictionary").innerHTML = Robot.Model;
}