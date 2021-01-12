import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h3 className="text-center pb-3">Awesome React Plugins</h3>
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center">
          <p className="mb-0 flex-grow-1 text-success">文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述</p>
          <div className="text-nowrap">
            <a href="" className="btn btn-primary btn-sm px-3 ml-3">npm</a>
            <a href="" className="btn btn-primary btn-sm px-3 ml-3">GitHub</a>
            <NavLink to="/">
              <button className="btn btn-primary btn-sm px-3 ml-3">使用示例</button>
            </NavLink>
          </div>
        </li>
      </ul>
    </>
  )
}