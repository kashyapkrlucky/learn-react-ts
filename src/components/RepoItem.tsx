import React from 'react'

function RepoItem(props: any) {
  return (
    <div className='flex flex-col gap-2 border-2 border-slate-100 p-4'>
      <div className='flex flex-row items-center gap-2 text-2xl text-indigo-600'>
        {props.package.name}
        <span className='text-xs bg-indigo-600 text-white px-2'> {props.package.version} </span>
      </div>

      <div className='text-xs text-slate-600'> {props.package.description} </div>
      <div className='flex flex-row flex-wrap items-center gap-2 text-sm'>
        {
          props.package.keywords && props.package.keywords.map((m:any) => <span className='bg-slate-400 px-2 text-white' key={m}>{m}</span>)
        }
      </div>
      <div className='text-xs text-slate-600'> Published On: {props.package.date} </div>
      <div className='flex flex-row items-center gap-2 text-sm' >
        <span className='border-2 px-2 text-indigo-600'>
          <a href={props.package.links.npm} target='_blank'>npm</a>
        </span>
        <span className='border-2 px-2 text-indigo-600'>
          <a href={props.package.links.homepage} target='_blank'>Home Page</a>
        </span>
        <span className='border-2 px-2 text-indigo-600'>
          <a href={props.package.links.repository} target='_blank'>Git Repository</a>
        </span>
      </div>
      {/* <div> {props.package.keywords.join(',')} </div> */}
      <div className='text-xs text-slate-600'> Publisher: {props.package.publisher.username} </div>
      <div className='text-sm text-green-600'>
        {(props.score.final * 100).toFixed(0)} / 100
      </div>
    </div>
  )
}

export default RepoItem
