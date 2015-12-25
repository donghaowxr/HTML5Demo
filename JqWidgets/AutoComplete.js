/**
 * Created by donghao on 2015-12-25.
 */
$(function(){
    var autotags=["iwen","ime","html","css","javascript","java","android","ios"];
    $("#tags").autocomplete({
       source:autotags
    });
});