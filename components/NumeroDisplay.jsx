export default function NumeroDisplay(props) {
    return (
        <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: "#222",
            borderRadius: '25px',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>{props.numero}</div>
    )
}