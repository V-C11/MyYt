const commentsData = [
  {
    name: "Ajay Saini",
    text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
    replies: [],
  },
  {
    name: "Ajay Saini",
    text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
    replies: [
      {
        name: "Ajay Saini",
        text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
        replies: [],
      },
      {
        name: "Ajay Saini",
        text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
        replies: [],
      },
      {
        name: "Ajay Saini",
        text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
        replies: [
          {
            name: "Ajay Saini",
            text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
            replies: [
              {
                name: "Ajay Saini",
                text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
                replies: [
                  {
                    name: "Ajay Saini",
                    text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
                    replies: [
                      {
                        name: "Ajay Saini",
                        text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Ajay Saini",
                    text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
                    replies: [],
                  },
                  {
                    name: "Ajay Saini",
                    text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
                    replies: [],
                  },
                  {
                    name: "Ajay Saini",
                    text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
                    replies: [],
                  },
                  {
                    name: "Ajay Saini",
                    text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ajay Saini",
    text: "xvgn gui dibusei dvnjxklvnrigfribpvgf",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 my-2 p-2 items-center rounded">
      <img
        className="w-11 h-11"
        alt="user"
        src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h2 className="text-2xl font-bold">Comments: </h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
