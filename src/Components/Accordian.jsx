import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ marginTop: '15px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, fontSize: '22px', fontWeight: '300', marginLeft: '-15px', color: 'RGB(51, 61, 74)' }}>
                        Gender
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ marginTop: '-15px', color: "RGB(51, 61, 74)", fontSize: '18px', fontWeight: '300', marginLeft: '-15px' }}>
                        Men
                    </Typography>
                    <Typography sx={{ color: "RGB(51, 61, 74)", fontSize: '18px', fontWeight: '300', marginLeft: '-15px' }}>
                        Women
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, fontSize: '22px', fontWeight: '300', marginLeft: '-15px', color: 'RGB(51, 61, 74)' }}  >
                        Sale
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ marginTop: '-15px', color: "RGB(51, 61, 74)", fontSize: '18px', fontWeight: '300', marginLeft: '-15px' }}>
                        Sport
                    </Typography>
                    <Typography sx={{ color: "RGB(51, 61, 74)", fontSize: '18px', fontWeight: '300', marginLeft: '-15px' }}>
                        Luxury
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, fontSize: '22px', fontWeight: '300', marginLeft: '-15px', color: 'RGB(51, 61, 74)' }}  >
                        Product
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ marginTop: '-15px', color: "RGB(51, 61, 74)", fontSize: '18px', fontWeight: '300', marginLeft: '-15px' }}>
                        Bag
                    </Typography>
                    <Typography sx={{ color: "RGB(51, 61, 74)", fontSize: '18px', fontWeight: '300', marginLeft: '-15px' }}>
                        Sweather
                    </Typography>
                    <Typography sx={{ color: "RGB(51, 61, 74)", fontSize: '18px', fontWeight: '300', marginLeft: '-15px' }}>
                        Sunglass
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
