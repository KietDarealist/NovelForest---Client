import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { Stories } from '../components/Stories/Stories'
import SliderComponent from '../components/Slider/Slider';

const Novels:INovel[] = [
    {
        novelName:"Tokyo Revengers",
        author: "David Kopp",
        thumbnail : "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/263935047_3040744859577353_7724284095442436951_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=gTl190ENbAoAX8mC4nd&tn=LNPwMX6EwPowdVv5&_nc_ht=scontent.fdad1-2.fna&oh=03_AVLf7bsR32USRf3aZoGMtQUij9zEganJqsqk0xXQFasq2Q&oe=61E8BB7F",
        images: [],
        chapter: [],
        views: 19001,
        comments: [],
        rate: 4
    
    },

    {
        novelName:"Tokyo Ghouls",
        author: "David Kopp",
        thumbnail : "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/263935047_3040744859577353_7724284095442436951_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=gTl190ENbAoAX8mC4nd&tn=LNPwMX6EwPowdVv5&_nc_ht=scontent.fdad1-2.fna&oh=03_AVLf7bsR32USRf3aZoGMtQUij9zEganJqsqk0xXQFasq2Q&oe=61E8BB7F",
        images: [],
        chapter: [],
        views: 28367,
        comments: [],
        rate: 4.5
    },

    {
        novelName:"Attack on Titans",
        author: "David Kopp",
        thumbnail : "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/263935047_3040744859577353_7724284095442436951_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=gTl190ENbAoAX8mC4nd&tn=LNPwMX6EwPowdVv5&_nc_ht=scontent.fdad1-2.fna&oh=03_AVLf7bsR32USRf3aZoGMtQUij9zEganJqsqk0xXQFasq2Q&oe=61E8BB7F",
        images: [],
        chapter: [],
        views: 39384,
        comments: [],
        rate: 4.5
    },

    {
        novelName:"Death Note",
        author: "David Kopp",
        thumbnail : "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/263935047_3040744859577353_7724284095442436951_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=gTl190ENbAoAX8mC4nd&tn=LNPwMX6EwPowdVv5&_nc_ht=scontent.fdad1-2.fna&oh=03_AVLf7bsR32USRf3aZoGMtQUij9zEganJqsqk0xXQFasq2Q&oe=61E8BB7F",
        images: [],
        chapter: [],
        views: 42657,
        comments: [],
        rate: 4
    },

    {
        novelName:"Fullmental Achemics",
        author: "David Kopp",
        thumbnail : "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/263935047_3040744859577353_7724284095442436951_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=gTl190ENbAoAX8mC4nd&tn=LNPwMX6EwPowdVv5&_nc_ht=scontent.fdad1-2.fna&oh=03_AVLf7bsR32USRf3aZoGMtQUij9zEganJqsqk0xXQFasq2Q&oe=61E8BB7F",
        images: [],
        chapter: [],
        views: 34761,
        comments: [],
        rate: 4
    },



]

interface IProps{

}


const Home:React.FC<IProps> = (props) => {
    return (
        <>
            <Header />
            <SliderComponent />
            <Stories title="Truy???n n???i b???t trong tu???n" data={Novels} />
            <Stories title="Truy???n m???i c???p nh???t" data={Novels} />
            <Stories title="Truy???n nhi???u l?????t xem" data={Novels} />
            <Stories title="Truy???n ???????c y??u th??ch" data={Novels} />
            <Stories title="Truy???n d??i" data={Novels} />
            <Stories title="Truy???n ng???n" data={Novels} />

            <Footer />
        </>
    )
}


export default Home;