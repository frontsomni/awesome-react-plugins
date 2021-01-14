import { useEffect, useState } from "react";

const DATAURL = 'https://cos.ap-beijing.myqcloud.com/public-data-1254963092/react_plugins.json'
export default function Home() {
  const [pluginsList, setPluginsList] = useState<{
    [key: string]: any
  }>({})
  useEffect(() => {
    async function getPlugins() {
      let res = await fetch(DATAURL)
      let data = await res.json()
      setPluginsList(data)
    }
    getPlugins()
  }, [])
  return (
    <>
      <h2 className="text-center pb-3 text-info">React 插件</h2>
      {
        Object.keys(pluginsList).map((plugin) => (
          <div key={plugin}>
          <h3 className="text-info">{pluginsList[plugin].title}</h3>
          <div className="row mb-5">
              {
                pluginsList[plugin].list.map((item: any) => (
                  <div className="col-sm-6 col-lg-4 my-3" key={item.name}>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">
                          <a target="_blank" rel="noreferrer" href={`https://registry.npmjs.org/${item.name}`} className="text-primary">{item.name}</a>
                        </h4>
                        <p className="card-text" style={{
                          minHeight: 50
                        }}>{item.desc}</p>
                        <div className="d-flex justify-content-center">
                          <a target="_blank" rel="noreferrer" href={item.npm} className="btn btn-primary text-nowrap bg-primary">Npm 库</a>
                          <a target="_blank" rel="noreferrer" href={item.github} className="btn btn-primary text-nowrap mx-4 bg-primary">GitHub 源码</a>
                          {
                            item.website
                            ? <a target="_blank" rel="noreferrer" href={item.website} className="btn btn-primary text-nowrap bg-info">网站教程</a>
                            : null
                          }

                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }

          </div>
          </div>
        ))
      }

    </>
  )
}