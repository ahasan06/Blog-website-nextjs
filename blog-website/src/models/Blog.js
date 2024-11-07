import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "title is required"],
            min:4
        },
        description: {
            type: String,
            required: [true, "description is required"],
            min: 20,
        },
        excerpt: {
            type: String,
            required: [true, "excerpt is required"],
        },
        image:{
            id:{
                type:String
            },
            url:{
                type:String
            }
        },
        category:{
            type:String,
            required:true,
            enum: ["history", "photography", "science fiction", "technology", "art", "travel","programming","trending"] 
        },
        quote: {
            type: String,
            required: false, 
        },
        authorId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Users"
        },
        likes:{
            type: [mongoose.Schema.Types.ObjectId], 
            ref: "Users",
            default: [],
        },
        comments:[
            {
                user :{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"Users",
                    required:true
                },
                text:{
                    type:String,
                    required:true
                },
                date:{
                    type:Date,
                    default:Date.now
                },
                replies:[
                    {
                        user:{
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "Users",
                            required: true,
                        },
                        text: {
                            type: String,
                            required: true,
                        },
                        date: {
                            type: Date,
                            default: Date.now,
                        },
                    }
                ]
            }
        ]
       
    }
);

const BlogModel = mongoose.models.Blog  || mongoose.model("Blog", BlogSchema);
export default BlogModel;
