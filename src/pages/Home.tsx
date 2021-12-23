import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { Stories } from '../components/Stories/Stories'

const stories:Stories[] = [
    {
    title:"Truyen 1",
images : "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/263935047_3040744859577353_7724284095442436951_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=gTl190ENbAoAX8mC4nd&tn=LNPwMX6EwPowdVv5&_nc_ht=scontent.fdad1-2.fna&oh=03_AVLf7bsR32USRf3aZoGMtQUij9zEganJqsqk0xXQFasq2Q&oe=61E8BB7F",
    views : 1000
    },
    {
        title:"Truyen 1",
    images : "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/265580760_452630283035025_1208025639647299542_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=oULzNXmtINUAX8JJoC0&_nc_ht=scontent.fdad2-1.fna&oh=03_AVIZ9EynKMkcfs6QZlBxUiGeSKJlqBYJ0zf6nxGLaXx5qg&oe=61E88707",
        views : 1000
        },
        {
            title:"Truyen 1",
        images : "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/266969140_1330345134076457_1420398506154692580_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=j1ZiTIiq4xUAX8dj2Km&_nc_ht=scontent.fdad1-2.fna&oh=03_AVK3jzBfET51dZK4jMabTImE8FMR11vLL3DJTotPoosi8A&oe=61E86077",
            views : 1000
            },
            {
                title:"Truyen 1",
            images : "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/265552803_928553287860826_7984210897814299885_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RRTHOrMqdg8AX_WF0sm&_nc_ht=scontent.fdad1-1.fna&oh=03_AVLqUokPONaqXsfQbqnkbUf104O1noSoO-RJhxGHhiIArQ&oe=61E96FA3",
                views : 1000
                },
                {
                    title:"Truyen 1",
                images : "https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/263606085_522839402017456_6794626536391339256_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=VoR5mPeDYOwAX-Tjhqm&_nc_ht=scontent.fdad1-3.fna&oh=03_AVI_l2UKyvaaURL8WPzsQVm__KXnHnr6Ee10LP7DJwIYrg&oe=61E86087",
                    views : 1000
                    }

]

interface IProps{

}


const Home:React.FC<IProps> = (props) => {
    return (
        <>
            <Header />
            <Stories title="Truyện nổi bật trong tuần" data={stories} />
            <Stories title="Truyện mới cập nhật" data={stories} />

            <Footer />
        </>
    )
}


export default Home;