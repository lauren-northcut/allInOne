import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const Title = (props)=>{
    
    return(
        <div>
        <Stack spacing={2}>
  <div>{props.title1}</div>
  <div>{props.title2}</div>
  <div>{props.title3}</div>
  <div>{props.title4}</div>
</Stack>
</div>
    )
}

export default Title;