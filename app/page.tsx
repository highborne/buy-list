'use client';
import { useState, useEffect } from 'react';

type itemProps = {
  id: string;
  name: string;
  price: number;
};

export default function Home() {
  const [listItems, setListItems] = useState<itemProps[]>([
    { id: '0001', name: 'folha', price: 4.95 },
    { id: '0002', name: 'oleo', price: 6.95 },
    { id: '0003', name: 'carro', price: 43000.95 },
  ]);

  const [listValueTotal, setListValueTotal] = useState<number>(0);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-4 sm:p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm'>
        <h1 className='p-4 text-center text-4xl'>Buy List</h1>

        <div className='rounded-lg bg-slate-800 p-4'>
          <form className='grid grid-cols-7 items-center gap-4 text-black'>
            <input
              className='col-span-3 border p-3'
              type='text'
              placeholder='Insira um item'
            />
            <input
              className='col-span-3 border p-3'
              type='number'
              placeholder='Insira o valor'
            />

            <button
              className='col-span-1 bg-slate-950 p-3 text-xl text-white hover:bg-slate-900'
              type='submit'
            >
              +
            </button>
          </form>

          <ul>
            {listItems.map((item: itemProps) => (
              <li
                className='my-4 flex w-full justify-between bg-slate-950 text-white'
                key={`item-${item.id}-in-list`}
              >
                <div className='flex w-full justify-between p-4'>
                  <span className='capitalize'>{item.name}</span>
                  <span>R$ {item.price}</span>
                </div>
                <button className='hove:bg-slate-900 ml-8 w-16 border-l-2 border-slate-900 p-4'>
                  x
                </button>
              </li>
            ))}
          </ul>
          {Boolean(listItems.length) && (
            <div className='flex justify-between p-3 text-white'>
              <span>Total: </span>
              <span>R$ {listValueTotal}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
