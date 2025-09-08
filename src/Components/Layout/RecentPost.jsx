import React from "react";
import Image from "../Image";
import Trust from "../../assets/Trust.jpg";
import Oribi from "../../assets/Oribi.jpg";
import Furniro from "../../assets/Furniro.jpg";
import Abode from "../../assets/Adobe.jpg";
import Button from "../Button";
import Rectangle1 from "../../assets/Rectangle1.png";
import Rectangle2 from "../../assets/Rectangle2.png";
import Rectangle3 from "../../assets/Rectangle3.png";
import Rectangle4 from "../../assets/Rectangle4.png";

const blogData = [
  {
    id: 1,
    title: "Exploring Cutting Edge Techno Learn Shaping Tomorrow",
    description:
      "Stay ahead in the fast-paced world of technology with our comprehensive insights and updates on the latest trends, innovations, and breakthroughs.",
    author: "Irin Pervin",
    date: "March 25, 2024",
    image: Trust,
    avatar: Rectangle1,
    tags: ["Tech Learn", "Vue js"],
    readTime: "3min Read",
  },
  {
    id: 2,
    title: "Whether you work on your own or with thousands of other",
    description:
      "AI involves the development of computer systems that can perform tasks that.",
    author: "John Smith",
    date: "April 2, 2024",
    image: Furniro,
    avatar: Rectangle2,
    tags: ["AI", "Innovation"],
    readTime: "5min Read",
  },
  {
    id: 3,
    title: "It is designed to let you seamlessly combine components",
    description:
      "Robots are automated machines capable of carrying out tasks autonomously or under human supervision, and they find",
    author: "Sarah Lee",
    date: "April 10, 2024",
    image: Abode,
    avatar: Rectangle3,
    tags: ["Figma", "UI/UX"],
    readTime: "4min Read",
  },
  {
    id: 4,
    title: "React components receive data and return what should appear",
    description:
      "Green technology, also known as clean technology or environmental technology, aims to develop products",
    author: "David Miller",
    date: "April 15, 2024",
    image: Oribi,
    avatar: Rectangle4,
    tags: ["React", "JavaScript"],
    readTime: "6min Read",
  },
];

const RecentPost = () => {
  return (
    <>
      <div className="bg-bg1Color py-[100px]">
        <div className="max-w-mContainer m-auto ">
          {/* Top Section */}
          <h2 className="text-[16px] text-center text-white mb-[30px]">
            My Recent Post
          </h2>
          <h2 className="text-[20px] text-center font-medium text-white">
            Recent Post
          </h2>
          <p className="text-[16px] text-center mt-5 font-normal text-white mx-auto lg:w-[50%]">
            With a strong foundation in frontend development and a keen eye for
            design, I specialize in creating interactive and responsive web.
          </p>

          {/* Blog Cards */}
          <div className="px-5 md:px-0 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {blogData.map((post) => (
                <div
                  key={post.id}
                  className="shadow-2xl rounded-2xl p-7 space-y-5 hover:scale-105 duration-500 text-white"
                >
                  {/* Image */}
                  <Image className="w-full rounded-2xl" imgSrc={post.image} />

                  {/* Tags + Read Time */}
                  <div className="flex justify-between items-center mt-5 flex-wrap gap-3">
                    <div className="flex gap-3 flex-wrap">
                      {post.tags.map((tag, idx) => (
                        <Button
                          key={idx}
                          className="py-2 px-6 rounded-2xl bg-bgColor text-center"
                          text={tag}
                        />
                      ))}
                    </div>
                    <h2 className="text-[16px]">{post.readTime}</h2>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold mt-6">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[16px] font-normal mt-4">
                    {post.description}
                  </p>

                  {/* Author Info */}
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      className="w-10 h-10 rounded-full"
                      imgSrc={post.avatar}
                      alt={post.author}
                    />
                    <div className="flex gap-6 items-center">
                      <h2 className="font-semibold">{post.author}</h2>
                      <h2 className="text-sm text-gray-300">{post.date}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;