import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
import RepoItem from './RepoItem';

function RepoList() {
    const [term, setTerm] = useState('');
    const { srcRepo } = useActions();
    const { data, error, loading } = useSelector((state: any) => state.repo);
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        srcRepo(term);
    };
    return (
        <div>
            <form className='flex flex-row gap-4 mb-4' onSubmit={onSubmit}>
                <input className='border-2 px-2 h-10' type="text" placeholder='Enter package name' onChange={(e) => setTerm(e.target.value)} />
                <button className='bg-green-600 px-5 text-white h-10'>Search</button>
            </form>
            <div className='flex flex-col gap-2 pb-4'>
                {error && <h4>{error}</h4>}
                {loading && <h4>loading...</h4>}
                {
                    data.map((p: any, index: number) => <RepoItem key={index} {...p}></RepoItem>)
                }
            </div>
        </div>
    )
}

export default RepoList
