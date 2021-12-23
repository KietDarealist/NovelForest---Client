
interface Props { 
  data : Stories[],
  title : string
}

export  const Stories: React.FC<Props>= (props) => {

    return (
        <div className="flex flex-col mx-12 my-8">
          <h1 className="text-xl text-black font-semibold my-2">{props.title}</h1>
          <div className="flex mx-auto gap-4">
            {
              props.data.map(item => (
                <div>
                  <img src={item.images} alt="lgoo"/>
                  <h3 className="text-center">{item.title}</h3>
                  <p className="text-center">{item.views}</p>
                </div>
              ))
            }
          </div>
          
        </div>
    )
}
