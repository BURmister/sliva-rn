import Svg, { Path } from 'react-native-svg';

export const HomeTabIcon = ({ size, focused, color }) => {
   return (
      <Svg width={size} height={size} viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
         <Path d="M24.2726 15.5655V26.919H4.72656V15.5655" stroke={color} strokeWidth={2} strokeMiterlimit={10}></Path>
         <Path d="M0.941406 14.652L14.4554 3.55951L28.0564 14.7245" stroke={color} strokeWidth={2} strokeMiterlimit={10}></Path>
      </Svg>
   );
};

export const CatalogTabIcon = ({ size, focused, color }) => {
   return (
      <Svg width={size} height={size} viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
         <Path
            d="M22.2238 19.5167C25.948 19.5167 28.9671 16.4976 28.9671 12.7733C28.9671 9.04909 25.948 6.03 22.2238 6.03C18.4996 6.03 15.4805 9.04909 15.4805 12.7733C15.4805 16.4976 18.4996 19.5167 22.2238 19.5167Z"
            stroke={color}
            strokeWidth={2}
            strokeMiterlimit={10}></Path>
         <Path d="M24.8711 18.77L28.9661 27.24" stroke={color} strokeWidth={2} strokeMiterlimit={10}></Path>
         <Path d="M0.234375 10.4983H11.5394" stroke={color} strokeWidth={2} strokeMiterlimit={10}></Path>
         <Path d="M0.234375 18.5017H11.026" stroke={color} strokeWidth={2} strokeMiterlimit={10}></Path>
         <Path d="M0.234375 26.4933H17.641" stroke={color} strokeWidth={2} strokeMiterlimit={10}></Path>
         <Path d="M0.234375 2.50665H17.641" stroke={color} strokeWidth={2} strokeMiterlimit={10}></Path>
      </Svg>
   );
};

export const ProfileTabIcon = ({ size, focused, color }) => {
   return (
      <Svg width={size} height={size} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
         <Path
            d="M14.0004 14.57C17.3316 14.57 20.0321 11.8695 20.0321 8.53832C20.0321 5.20712 17.3316 2.50665 14.0004 2.50665C10.6692 2.50665 7.96875 5.20712 7.96875 8.53832C7.96875 11.8695 10.6692 14.57 14.0004 14.57Z"
            stroke={color}
            strokeWidth={2}
            strokeMiterlimit={10}></Path>
         <Path
            d="M25.7351 26.4933H2.26172C2.26172 20.0067 7.51172 14.7567 13.9984 14.7567C20.4851 14.7567 25.7351 20.0067 25.7351 26.4933Z"
            stroke={color}
            strokeWidth={2}
            strokeMiterlimit={10}></Path>
      </Svg>
   );
};

export const FavoriteTabIcon = ({ size, focused, color }) => {
   return (
      <Svg width={size} height={size} viewBox="0 0 28 26" fill="none">
         <Path
            d="M13.9589 23.25L4.71889 14.01C-3.05111 6.23998 6.18889 -3.00002 13.9589 4.76998C21.8689 -3.14001 31.1089 6.09999 23.1989 14.01L13.9589 23.25Z"
            stroke={color}
            strokeWidth={2}
            strokeMiterlimit={10}></Path>
      </Svg>
   );
};

export const BasketTabIcon = ({ size, focused, color }) => {
   return (
      <Svg width={size} height={size} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
         <Path
            d="M20.3547 12.3315V7.7322C20.3547 4.22537 17.5142 1.38495 14.0074 1.38495C10.5006 1.38495 7.66016 4.22537 7.66016 7.7322V12.3315"
            stroke={color}
            strokeWidth={2}
            strokeLinejoin="round"></Path>
         <Path d="M15.8743 27.2109H24.7233V18.4493V7.95068H3.28906V27.2109H15.9726" stroke={color} strokeWidth={2} strokeLinejoin="round"></Path>
      </Svg>
   );
};

export const useSvgIcon = ({ name, size, focused, color }) => {
   switch (name) {
      case 'HomeTabIcon':
         return <HomeTabIcon size={size} focused={focused} color={color} />;
      case 'CatalogTabIcon':
         return <CatalogTabIcon size={size} focused={focused} color={color} />;
      case 'ProfileTabIcon':
         return <ProfileTabIcon size={size} focused={focused} color={color} />;
      case 'FavoriteTabIcon':
         return <FavoriteTabIcon size={size} focused={focused} color={color} />;
      case 'BasketTabIcon':
         return <BasketTabIcon size={size} focused={focused} color={color} />;
      default:
         return null;
   }
};

export const FlashIcon = ({ height, width, fill, stroke, strokeWidth }) => {
   return (
      <Svg viewBox="0 0 512 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
         <Path
            fill={fill}
            strokeLinecap={'round'}
            strokeLinejoin={'round'}
            strokeWidth={strokeWidth}
            stroke={stroke}
            d="M315.27 33 96 304h128l-31.51 173.23a2.36 2.36 0 0 0 2.33 2.77h0a2.36 2.36 0 0 0 1.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 0 0-2.44-2.75h0a2.42 2.42 0 0 0-1.95 1z"></Path>
      </Svg>
   );
};

export const BoxIcon = ({ height, width, fill, stroke, strokeWidth }) => {
   return (
      <Svg stroke={stroke} fill={fill} strokeWidth={strokeWidth} viewBox="0 0 16 16" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
         <Path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"></Path>
      </Svg>
   );
};

export const UserIcon = ({ height, width, fill, stroke, strokeWidth }) => {
   return (
      <Svg viewBox="0 0 256 256" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
         <Path
            d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM71.44,198a66,66,0,0,1,113.12,0,89.8,89.8,0,0,1-113.12,0ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120Zm99.51,69.64a77.53,77.53,0,0,0-40-31.38,46,46,0,1,0-51,0,77.53,77.53,0,0,0-40,31.38,90,90,0,1,1,131,0Z"
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}></Path>
      </Svg>
   );
};

export const BagIcon = ({ height, width, fill, stroke, strokeWidth }) => {
   return (
      <Svg stroke={stroke} fill={fill} strokeWidth={strokeWidth} viewBox="0 0 16 16" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
         <Path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></Path>
      </Svg>
   );
};

