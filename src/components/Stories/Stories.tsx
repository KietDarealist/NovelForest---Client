
interface IProps { 
  data : INovel[],
  title : string
}

export  const Stories: React.FC<IProps>= (props) => {

    return (
        <div className="z-0 flex flex-col mx-12 my-8">
          <h1 className="my-2 text-xl font-semibold text-black">{props.title}</h1>
          <div className="flex gap-4 mx-auto">
            {
              props.data.map(item => (
                <div>
                  <img src={item.thumbnail as string} alt="lgoo"/>
                  <h3 className="text-center">{item.novelName}</h3>
                  <p className="text-center">{item.views}</p>
                </div>
              ))
            }
          </div>
          
        </div>
    )
}
