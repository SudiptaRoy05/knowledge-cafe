import profile from '../../assets/images/profile.png'
export default function Header() {
  return (
    <header className='flex justify-between items-center py-3 w-10/12 mx-auto border-b'>
         <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
         <img src={profile}></img>
    </header>
  )
}
