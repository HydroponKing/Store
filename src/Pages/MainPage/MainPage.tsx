

interface MainProps{
  products : any[]
}


export default function MainPage({products} : MainProps) {

  console.log(products[0]);
  

  return (
    <div>
      {products.map((item, index) => {
        return <div key={index}>
          {item.title}
        </div>
      })}
    </div>
  )
}
