export default function Title(props){
  const {tit, sub}=props
    return(<div className="mx-auto max-w-2xl lg:text-center">
    
    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {tit}
    </p>
    <p className="mt-6 text-lg leading-8 text-gray-600">
      {sub}
    </p>
  </div>)
      
  }