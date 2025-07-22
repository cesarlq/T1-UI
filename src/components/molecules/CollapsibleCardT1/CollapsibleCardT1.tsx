import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Collapse, 
  IconButton, 
  Typography,
  Stack
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { CollapsibleCardT1Props } from './CollapsibleCardT1.type';



const CollapsibleCardT1: React.FC<CollapsibleCardT1Props> = ({
  title,
  headerContent,
  bodyContent,
  footerContent,
  collapseContent,
  defaultCollapsed = false,
  cardSx = {},
  headerSx = {},
  bodySx = {},
  footerSx = {},
  collapseSx = {},
  collapseButtonSx = {},
  hideCollapseButton = false,
  onCollapseChange,
  loading = false
}) => {
  const [cardCollapsed, setCardCollapsed] = useState(defaultCollapsed);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleCardCollapse = () => {
    const newCollapsedState = !cardCollapsed;
    setCardCollapsed(newCollapsedState);
    
    // Call the callback with the new state
    if (onCollapseChange) {
      onCollapseChange(newCollapsedState);
    }
  };

  return (
    <Card 
      sx={{ 
        marginBottom: 2, 
        boxShadow: '0px 0px 5px 1px #0000001A', 
        bgcolor: '#FFFFFF', 
        p: 2,
        ...cardSx 
      }}
    >
      <CardContent sx={{ p: 0, '&:last-child': { paddingBottom: '15px' } }}>
        {/* Header with title and optional content */}
        <Box 
          sx={{
            p: isSmallScreen ? 0 : 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: isSmallScreen ? 'flex-start' : 'center',
            borderBottom: '1px solid #f0f0f0',
            flexDirection: isSmallScreen ? 'column' : 'row',
            ...headerSx
          }}
        >
          <Stack direction="row" justifyContent="space-between" width="100%">
            {title && (
              <Typography variant="h6" fontWeight={600} sx={{ ml: isSmallScreen ? 1 : 0 }}>
                {title}
              </Typography>
            )}
            {isSmallScreen && !hideCollapseButton && collapseContent && (
              <IconButton
                onClick={toggleCardCollapse}
                size="small"
                aria-label={cardCollapsed ? 'expand' : 'collapse'}
                sx={{ 
                  bgcolor: '#F8F8F8', 
                  borderRadius: '8px',
                  ...collapseButtonSx
                }}
              >
                {cardCollapsed ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
              </IconButton>
            )}
            {!isSmallScreen && !hideCollapseButton && collapseContent && !headerContent && (
              <IconButton
                onClick={toggleCardCollapse}
                size="small"
                aria-label={cardCollapsed ? 'expand' : 'collapse'}
                sx={{ 
                  bgcolor: '#F8F8F8', 
                  borderRadius: '8px',
                  ...collapseButtonSx
                }}
              >
                {cardCollapsed ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
              </IconButton>
            )}
          </Stack>
          
          {headerContent && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {headerContent}
              
              {!isSmallScreen && !hideCollapseButton && (
                <IconButton
                  onClick={toggleCardCollapse}
                  size="small"
                  aria-label={cardCollapsed ? 'expand' : 'collapse'}
                  sx={{ 
                    bgcolor: '#F8F8F8', 
                    borderRadius: '8px',
                    ...collapseButtonSx
                  }}
                >
                  {cardCollapsed ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                </IconButton>
              )}
            </Box>
          )}
        </Box>

        {/* Main content area */}
        {bodyContent && (
          <Box 
            sx={{ 
              p: isSmallScreen ? 0 : 2, 
              mt: isSmallScreen ? 2 : 0,
              ...bodySx
            }}
          >
            {bodyContent}
          </Box>
        )}

        {/* Collapsible section */}
        {collapseContent && (
          <Collapse in={!cardCollapsed}>
            <Box 
              sx={{ 
                p: isSmallScreen ? 0 : 2, 
                mt: isSmallScreen ? 2 : 0,
                ...collapseSx
              }}
            >
              {collapseContent}
            </Box>
          </Collapse>
        )}

        {/* Footer content */}
        {footerContent && (
          <Box 
            sx={{
              p: isSmallScreen ? 0 : 2,
              mt: 2,
              ...footerSx
            }}
          >
            {footerContent}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CollapsibleCardT1;
