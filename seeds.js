var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {
        name: "Salmon Creek",
        image: "https://hipcamp-res.cloudinary.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1437679190/campground-photos/cwfi6nzi26glgkctpyko/tahoe-national-forest-salmon-creek-campground.jpg",
        description: "This is a beautiful campground with great salmon fishing spots you and your family will enjoy."
    },
    {
        name: "Algonquin Park",
        image: "https://www.algonquinblog.com/wp-content/uploads/2020/02/Lake-of-Two-Rivers-Campground-1024x682.png",
        description: "A relaxing get away with lots of trees and mosquitoes."
    },
    {
        name: "Glacier Camp",
        image: "https://www.backpacker.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTQ0OTE0MTExMzIxMDg5NzY1/bp0616nps_skranz_sahalels8c4537_gn.webp",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campground!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    //add a few comments
                    Comment.create(
                        {
                            text: "This place rocks, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                    });
                }
            });
        });
    });
}

module.exports = seedDB;