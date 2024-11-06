import Layout from '../Layout'

const Owner = () => {
  return (
    <Layout>
        <div>
            <div className='flex justify-center p-4'>
                <h1 className='text-3xl font-bold mt-2'>Fronk - Group G - 31</h1>
            </div>
            <img src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/453980198_1012735617521294_1898384474319214131_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ziBiVw2RUJ0Q7kNvgFcNHt0&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=A3TQaZKrvDXr3N6RS24jkd0&oh=00_AYCf2_jt7uFsDmiyzeby1enobndtrpCNSa7wNIqSnTlO5A&oe=6730B70C" 
            alt="cat"
            className='w-80 shadow-md mx-auto my-10' />

            <div className='w-[50%] mx-auto'>
                <p className='text-base'>
                <span className="font-bold flex justify-center">Short Biography:</span> 
                <br />Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quos illo numquam, velit adipisci
            possimus modi totam, facilis id voluptatem doloribus fugiat autem
            magnam vel? Aliquam nisi corporis quam labore? Nemo.
                </p>
            </div>
        </div>
    </Layout>
  )
}

export default Owner