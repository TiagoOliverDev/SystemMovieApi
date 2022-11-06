import { Link } from "react-router-dom"
import { Input, Space } from 'antd';
import { BiCameraMovie } from "react-icons/bi"

//import '../../src/style.css'
import 'antd/dist/antd.min.css'

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const Navbar = () => {
    return (
     <nav id='navbar'>
        <h2>
          <Link to="/">
            <BiCameraMovie/> MoviesLib
          </Link>
        </h2>
        <form>
        <Space direction="vertical">
          <Search
            placeholder="Busque algum filme..."
            allowClear
            enterButton="Buscar"
            size="large"
            onSearch={onSearch}
          />
        </Space>
        </form>
      </nav>
    ) 
}

export default Navbar