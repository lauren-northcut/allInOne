import { Row } from 'react-bootstrap';
import SimpleCard from '../../components/scard';
import Title from '../../components/title';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


const Data = () => {
    return (

        <section>
            <h1 > <Title

                title1="DATA VISUALIZATION" />
            </h1>
            <Grid container spacing={2}>

                <Grid item md={10}>
                    <Stack direction="row">
                        <Stack className="dataTitle">
                            <div>L</div>
                            <div>I</div>
                            <div>N</div>
                            <div>E</div>
                        </Stack>
                        <Stack className="dataTitle">
                            <div>P</div>
                            <div>L</div>
                            <div>O</div>
                            <div>T</div>
                        </Stack>
                        <SimpleCard
                            img="data:image/jpeg;base64,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"

                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis sapien vitae scelerisque luctus. Cras eu lectus ac dui eleifend elementum. Integer dignissim risus vestibulum nunc consequat, eu sagittis magna consectetur. Quisque ultricies, nisl vel tincidunt hendrerit, nunc turpis facilisis augue, a congue nisi metus quis odio. Aliquam id sapien a odio sagittis euismod ut sit amet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed pulvinar luctus bibendum."
                        />
                        <Stack className="dataTitle">
                            <div>S</div>
                            <div>C</div>
                            <div>A</div>
                            <div>T</div>
                            <div>T</div>
                            <div>E</div>
                            <div>T</div>
                        </Stack>
                        <Stack className="dataTitle">
                            <div>P</div>
                            <div>L</div>
                            <div>O</div>
                            <div>T</div>
                        </Stack>
                        <SimpleCard
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfCaiKnB69h3CX2kVB7cv6Oh4Y8q3BvYKg&usqp=CAU"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis sapien vitae scelerisque luctus. Cras eu lectus ac dui eleifend elementum. Integer dignissim risus vestibulum nunc consequat, eu sagittis magna consectetur. Quisque ultricies, nisl vel tincidunt hendrerit, nunc turpis facilisis augue, a congue nisi metus quis odio. Aliquam id sapien a odio sagittis euismod ut sit amet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed pulvinar luctus bibendum."
                        />
                        <Stack className="dataTitle">
                            <div>B</div>
                            <div>A</div>
                            <div>R</div>
                        </Stack>
                        <Stack className="dataTitle">
                            <div>P</div>
                            <div>L</div>
                            <div>O</div>
                            <div>T</div>
                        </Stack>
                        <SimpleCard
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbFuNr_OrOEcWrmKKrh1c1mVSKSYF5QugCCg&usqp=CAU"
                            header="Bar Plots"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis sapien vitae scelerisque luctus. Cras eu lectus ac dui eleifend elementum. Integer dignissim risus vestibulum nunc consequat, eu sagittis magna consectetur. Quisque ultricies, nisl vel tincidunt hendrerit, nunc turpis facilisis augue, a congue nisi metus quis odio. Aliquam id sapien a odio sagittis euismod ut sit amet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed pulvinar luctus bibendum."
                        />
                    </Stack>
                </Grid>
            </Grid>

        </section>
    )
}

export default Data;