import  './Form.css'
export default function Form(props,id){
    return(
    
    <form className='container'>
        <div>
            <label className='label' >{props.label}</label>
            <input className='input' placeholder={props.placeholder} type={props.type} id={id}></input>
        </div>
    </form>
    )
}