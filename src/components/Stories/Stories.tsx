
interface IProps { 
  data : Stories[],
  title : string
}

export  const Stories: React.FC<IProps>= (props) => {

    return (
        <div className="flex flex-col mx-12 my-8">
          <h1 className="my-2 text-xl font-semibold text-black">{props.title}</h1>
          <div className="flex gap-4 mx-auto">
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
