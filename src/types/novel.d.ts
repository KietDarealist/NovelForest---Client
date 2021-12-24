
interface IChapter{
    key?: Number;
    title?: String;
};


interface IComment{
    user?: IUser,
    content?: String,
};

interface INovel{
    novelName?: String,
    author?: String,
    thumbnail?: String,
    images?: String[],
    chapter?: IChapter[],
    views?: Number,
    comments?: IComment[],
    rate?: Number
}