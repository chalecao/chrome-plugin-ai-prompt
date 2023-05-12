const clsprefix = 'chrome-plugin-gpt-prompt';
// 创建侧边栏
var sidebar = document.createElement('div');
sidebar.className = `${clsprefix}-sidebar`;

const icons = {
    masks: `<svg t="1683803816634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1554" width="48" height="48"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#28A5C6" p-id="1555"></path><path d="M556.8 494.4c32.8 114.4-16 236.8-108.8 273.6-92.8 36-212-21.6-264.8-128l-37.6-75.2c-52.8-106.4-5.6-228.8 104.8-272l22.4-8.8c110.4-43.2 228 15.2 260.8 129.6l23.2 80.8z" fill="#FF4848" p-id="1556"></path><path d="M447.2 700.8c-92.8 36-212-21.6-264.8-128l-37.6-75.2c-9.6-18.4-15.2-37.6-18.4-56.8-7.2 40-1.6 83.2 18.4 124l37.6 75.2c52.8 106.4 172 164 264.8 128 82.4-32 130.4-132 116.8-234.4-9.6 76-52.8 142.4-116.8 167.2z" fill="#EA291C" p-id="1557"></path><path d="M532.8 412.8c-16.8-57.6-54.4-100.8-102.4-124-34.4 35.2-56 84-56 139.2l-0.8 126.4c-0.8 81.6 40 156.8 100 199.2 75.2-47.2 111.2-156.8 81.6-259.2l-22.4-81.6z" fill="#EA291C" p-id="1558"></path><path d="M387.2 784c-85.6 0-172-56.8-214.4-141.6l-37.6-75.2c-27.2-52.8-30.4-111.2-9.6-164.8 20.8-52.8 63.2-94.4 119.2-116l22.4-8.8c25.6-9.6 51.2-14.4 77.6-14.4 91.2 0 169.6 59.2 195.2 148l23.2 80.8c34.4 117.6-16.8 243.2-114.4 280-18.4 8-40 12-61.6 12z m-42.4-504c-24 0-48.8 4.8-72 13.6l-22.4 8.8C199.2 321.6 160 360 140.8 408.8c-19.2 48.8-16 102.4 8.8 152l37.6 75.2c40 79.2 120.8 132.8 200 132.8 20 0 39.2-3.2 56.8-10.4 89.6-34.4 136.8-152 104.8-261.6l-24-80.8c-23.2-81.6-96-136-180-136z" fill="#074370" p-id="1559"></path><path d="M320 696c-4 0-8-3.2-8-8-2.4-42.4 22.4-81.6 62.4-97.6 40-15.2 84.8-4 111.2 29.6 3.2 3.2 2.4 8.8-0.8 11.2-3.2 3.2-8.8 2.4-11.2-0.8-22.4-28-60-37.6-92.8-24.8s-53.6 45.6-52 81.6c0 4.8-4 8.8-8.8 8.8 0.8 0 0 0 0 0zM200 528c-3.2 0-5.6-1.6-7.2-4-2.4-4-0.8-8.8 3.2-10.4l64-32c4-2.4 8.8-0.8 11.2 3.2 2.4 4 0.8 8.8-3.2 10.4l-64 32c-0.8 0.8-2.4 0.8-4 0.8zM392 448c-3.2 0-6.4-2.4-7.2-6.4-0.8-4 1.6-8.8 5.6-9.6l65.6-17.6c4-0.8 8 1.6 9.6 5.6 0.8 4-1.6 8.8-5.6 9.6L393.6 448H392z" fill="#074370" p-id="1560"></path><path d="M856.8 598.4c-22.4 116.8-128 204-235.2 193.6-107.2-10.4-194.4-116-193.6-235.2l0.8-126.4C428.8 312 525.6 224 644 236l60.8 5.6c118.4 11.2 196.8 116 174.4 232.8l-22.4 124z" fill="#FBD000" p-id="1561"></path><path d="M880 416l-23.2 124c-22.4 116.8-128 204-235.2 193.6-104-10.4-188.8-108.8-193.6-223.2v47.2c-0.8 118.4 86.4 224 193.6 234.4 107.2 10.4 212.8-76.8 235.2-193.6l23.2-124c4.8-23.2 4.8-46.4 1.6-68-0.8 3.2-0.8 6.4-1.6 9.6z" fill="#F4B10B" p-id="1562"></path><path d="M640.8 800c-6.4 0-12 0-18.4-0.8-112.8-11.2-207.2-120-206.4-243.2V428.8C416.8 313.6 511.2 224 625.6 224c7.2 0 14.4 0 21.6 0.8l61.6 5.6c60 5.6 112 34.4 147.2 80.8 34.4 46.4 48 104 36.8 162.4l-24 124.8C846.4 711.2 746.4 800 640.8 800z m-15.2-560C520 240 432.8 323.2 432 428.8v126.4c-0.8 115.2 87.2 217.6 192 227.2 5.6 0.8 11.2 0.8 16.8 0.8 98.4 0 192-82.4 212-188l24-124.8c10.4-54.4-1.6-108-33.6-150.4-32-42.4-80-68.8-135.2-74.4l-61.6-5.6h-20.8z" fill="#074370" p-id="1563"></path><path d="M635.2 704c-3.2 0-6.4 0-9.6-0.8-44-4-79.2-35.2-88.8-78.4-0.8-4 1.6-8 5.6-9.6 4-0.8 8 1.6 9.6 5.6 8 36 38.4 62.4 75.2 66.4 36.8 3.2 72-16.8 86.4-50.4 1.6-4 6.4-5.6 10.4-4 4 1.6 5.6 6.4 4 10.4-16.8 37.6-53.6 60.8-92.8 60.8zM505.6 442.4c-4 0-8-3.2-8-8s3.2-8 8-8l75.2-1.6c4 0 8 3.2 8 8s-3.2 8-8 8l-75.2 1.6zM800 472h-1.6l-72-16c-4-0.8-7.2-4.8-5.6-9.6 0.8-4 4.8-7.2 9.6-6.4l72 16c4 0.8 7.2 4.8 5.6 9.6-0.8 4-4 6.4-8 6.4z" fill="#074370" p-id="1564"></path><path d="M168 432c-0.8 0-2.4 0-3.2-0.8-4-1.6-6.4-6.4-4.8-10.4 0.8-0.8 50.4-114.4 192-116.8 4 0 8 3.2 8 8 0 4-3.2 8-8 8-130.4 2.4-174.4 103.2-176 107.2-1.6 3.2-4.8 4.8-8 4.8z" fill="#FFFFFF" opacity=".5" p-id="1565"></path><path d="M838.4 464h-0.8c-4.8-0.8-8-4.8-7.2-8.8 2.4-22.4 0.8-44-4.8-63.2-1.6-4 1.6-8.8 5.6-9.6 4.8-1.6 9.6 1.6 10.4 5.6 6.4 21.6 8.8 44.8 5.6 69.6-0.8 3.2-4.8 6.4-8.8 6.4zM816 360c-2.4 0-4.8-1.6-6.4-4-17.6-28-45.6-48-83.2-58.4-13.6-4-26.4-7.2-39.2-8.8-4.8-0.8-7.2-4.8-7.2-9.6 0.8-4.8 4.8-8 8.8-7.2 13.6 2.4 27.2 5.6 41.6 9.6 40.8 12 72 33.6 92 65.6 2.4 4 1.6 8.8-2.4 12-0.8 0-2.4 0.8-4 0.8z" fill="#FFFFFF" p-id="1566"></path><path d="M384 176c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48.8c-9.6 0-16.8 8-16.8 16.8 0 9.6 8 16.8 16.8 16.8 9.6 0 16.8-8 16.8-16.8 0-9.6-7.2-16.8-16.8-16.8zM688 896c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48.8c-9.6 0-16.8 8-16.8 16.8 0 9.6 8 16.8 16.8 16.8 9.6 0 16.8-8 16.8-16.8 0-9.6-7.2-16.8-16.8-16.8zM226.4 788c0-3.2-3.2-6.4-8-7.2l-15.2-2.4c-4-0.8-8.8-4.8-8.8-8.8l-2.4-15.2c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-2.4 15.2c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 6.4-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c6.4-1.6 9.6-4 9.6-7.2zM490.4 892c0-3.2-3.2-6.4-8-7.2l-15.2-2.4c-4-0.8-8.8-4.8-8.8-8.8l-2.4-15.2c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-2.4 15.2c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 6.4-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c6.4-1.6 9.6-4 9.6-7.2zM694.4 116c0-3.2-3.2-6.4-8-7.2l-14.4-1.6c-4-0.8-8.8-4.8-8.8-8.8l-2.4-15.2c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-2.4 15.2c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 6.4-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c5.6-2.4 8.8-4.8 8.8-8z" fill="#FFFFFF" opacity=".5" p-id="1567"></path></svg>`,
    text: `<svg t="1683809549268" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9074" width="48" height="48"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FBD000" p-id="9075"></path><path d="M352 344H208c-35.2 0-64 28.8-64 64v364c0 28.8 23.2 52 52 52h155.2c20 0 38.4-9.6 49.6-24h14.4V408c0.8-35.2-28-64-63.2-64z" fill="#D4D6D6" p-id="9076"></path><path d="M352 832H196c-32.8 0-60-27.2-60-60V408c0-19.2 7.2-37.6 20.8-51.2 13.6-13.6 32-20.8 51.2-20.8h144c40 0 72 32 72 72v392c0 4.8-3.2 8-8 8h-10.4c-13.6 15.2-32.8 24-53.6 24zM208 352c-15.2 0-28.8 5.6-39.2 16.8-11.2 10.4-16.8 24-16.8 39.2v368c0 24 20 40 44 40H352c16.8 0 32.8-8 43.2-20.8 1.6-1.6 4-3.2 6.4-3.2h6.4V408c0-31.2-24.8-56-56-56H208z" fill="#663210" p-id="9077"></path><path d="M264 408h-64.8c-16 0-28.8 12-28.8 28V768c0 12.8 2.4 24 15.2 24H264c8.8 0 16.8-8 22.4-16h1.6V435.2c0-15.2-8-27.2-24-27.2z" fill="#D4D6D6" p-id="9078"></path><path d="M264 800h-70.4c-16.8 0-25.6-8-25.6-24V432c0-21.6 9.6-32 30.4-32H264c19.2 0 32 13.6 32 35.2v336.8c0.8 0.8 0.8 2.4 0.8 3.2 0 4-2.4 7.2-6.4 8-4.8 8-14.4 16.8-26.4 16.8z m-65.6-384c-11.2 0-14.4 2.4-14.4 16v344c0 5.6 0 8 9.6 8H264c4.8 0 10.4-4.8 16-12.8v-336c0-7.2-2.4-19.2-16-19.2h-65.6z" fill="#663210" p-id="9079"></path><path d="M513.6 232H238.4c-19.2 0-30.4 15.2-30.4 34.4v500.8c0 14.4-1.6 24.8-16.8 24.8h321.6c19.2 0 38.4-15.2 38.4-34.4V266.4c0.8-19.2-18.4-34.4-37.6-34.4z" fill="#EAEAEA" p-id="9080"></path><path d="M513.6 800H191.2c-4.8 0-8-3.2-8-8s3.2-8 8-8 8.8 0 8.8-16.8V266.4c0-24.8 16-42.4 38.4-42.4h275.2c24.8 0 46.4 20 46.4 42.4v491.2c0 22.4-21.6 42.4-46.4 42.4z m-299.2-16h299.2c16 0 30.4-12.8 30.4-26.4V266.4c0-15.2-16-26.4-30.4-26.4H238.4c-16.8 0-22.4 14.4-22.4 26.4v500.8c0 4 0 10.4-1.6 16.8z" fill="#663210" p-id="9081"></path><path d="M816 192H312c-35.2 0-64 28.8-64 64v522.4c0 25.6-24.8 45.6-52 45.6H816c35.2 0 64-28.8 64-64V256c0-35.2-28.8-64-64-64z" fill="#EAEAEA" p-id="9082"></path><path d="M816 712H248v66.4c0 25.6-24.8 45.6-52 45.6H816c35.2 0 64-28.8 64-64V648c0 35.2-28.8 64-64 64z" fill="#D4D6D6" p-id="9083"></path><path d="M816 832H196c-4.8 0-8-3.2-8-8s3.2-8 8-8c23.2 0 44-17.6 44-37.6V256c0-40 32-72 72-72h504c40 0 72 32 72 72v504c0 40-32 72-72 72z m-577.6-16H816c31.2 0 56-24.8 56-56V256c0-31.2-24.8-56-56-56H312c-31.2 0-56 24.8-56 56v522.4c0 14.4-7.2 28-17.6 37.6z" fill="#663210" p-id="9084"></path><path d="M665.6 912.8c0-3.2-3.2-6.4-8-7.2l-15.2-2.4c-4-0.8-8.8-4.8-8.8-8.8L632 880c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-2.4 15.2c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 6.4-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c5.6-1.6 8.8-4.8 8.8-8zM472 88.8c0-3.2-3.2-6.4-8-7.2l-15.2-1.6c-4-0.8-8.8-4.8-8.8-8.8L437.6 56c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-2.4 15.2c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 6.4-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c5.6-1.6 9.6-4.8 9.6-8zM424 952c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48.8c-9.6 0-16.8 8-16.8 16.8 0 9.6 8 16.8 16.8 16.8 9.6 0 16.8-8 16.8-16.8 0-9.6-7.2-16.8-16.8-16.8zM616 136c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48.8c-9.6 0-16.8 8-16.8 16.8 0 9.6 8 16.8 16.8 16.8 9.6 0 16.8-8 16.8-16.8 0-9.6-7.2-16.8-16.8-16.8z" fill="#FFFFFF" p-id="9085"></path><path d="M584.8 265.6H816V448H584.8z" fill="#C4C4C4" p-id="9086"></path><path d="M415.2 296H312.8c-8.8 0-16.8-7.2-16.8-16s7.2-16 16.8-16H416c8.8 0 16.8 7.2 16.8 16s-8 16-17.6 16zM528 296h-56c-8.8 0-16-7.2-16-16s7.2-16 16-16h56c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="#7C7C7C" p-id="9087"></path><path d="M536 376H304c-4 0-8-3.2-8-8s3.2-8 8-8h232c4 0 8 3.2 8 8s-3.2 8-8 8zM536 424H304c-4 0-8-3.2-8-8s3.2-8 8-8h232c4 0 8 3.2 8 8s-3.2 8-8 8zM536 472H304c-4 0-8-3.2-8-8s3.2-8 8-8h232c4 0 8 3.2 8 8s-3.2 8-8 8zM824 520H304c-4.8 0-8-3.2-8-8s3.2-8 8-8h520c4.8 0 8 3.2 8 8s-3.2 8-8 8zM525.6 568H304c-4.8 0-8-3.2-8-8s3.2-8 8-8h221.6c4.8 0 8 3.2 8 8s-3.2 8-8 8zM824 568H589.6c-4.8 0-8-3.2-8-8s3.2-8 8-8H824c4.8 0 8 3.2 8 8s-3.2 8-8 8zM425.6 616H304c-4.8 0-8-3.2-8-8s3.2-8 8-8h121.6c4.8 0 8 3.2 8 8s-3.2 8-8 8zM676.8 616H483.2c-4.8 0-8-3.2-8-8s3.2-8 8-8h193.6c4.8 0 8 3.2 8 8s-4 8-8 8zM824 616H736c-4.8 0-8-3.2-8-8s3.2-8 8-8h88c4.8 0 8 3.2 8 8s-3.2 8-8 8zM384 664H304c-4.8 0-8-3.2-8-8s3.2-8 8-8h80c4.8 0 8 3.2 8 8s-4 8-8 8zM576 664H432c-4.8 0-8-3.2-8-8s3.2-8 8-8h144c4.8 0 8 3.2 8 8s-4 8-8 8zM824 664H632.8c-4.8 0-8-3.2-8-8s3.2-8 8-8H824c4.8 0 8 3.2 8 8s-3.2 8-8 8zM462.4 712H304c-4.8 0-8-3.2-8-8s3.2-8 8-8h158.4c4.8 0 8 3.2 8 8s-4 8-8 8zM676 712H513.6c-4.8 0-8-3.2-8-8s3.2-8 8-8h161.6c4.8 0 8 3.2 8 8s-3.2 8-7.2 8zM824 712H724c-4.8 0-8-3.2-8-8s3.2-8 8-8H824c4.8 0 8 3.2 8 8s-3.2 8-8 8zM633.6 760H304c-4.8 0-8-3.2-8-8s3.2-8 8-8h329.6c4.8 0 8 3.2 8 8s-3.2 8-8 8zM824 760H685.6c-4.8 0-8-3.2-8-8s3.2-8 8-8H824c4.8 0 8 3.2 8 8s-3.2 8-8 8z" fill="#ADADAD" p-id="9088"></path><path d="M746.4 352l53.6 96H648.8l53.6-96c12-21.6 32-21.6 44 0z" fill="#9B9B9B" p-id="9089"></path><path d="M608 328.8a24 23.2 0 1 0 48 0 24 23.2 0 1 0-48 0Z" fill="#FFFFFF" p-id="9090"></path><path d="M715.2 304c7.2 0 12.8-4 12.8-7.2s10.4-8 24-8h14.4c13.6 0 25.6-2.4 25.6 8 0 3.2-7.2 8-14.4 8s-17.6 1.6-17.6 4.8c0 3.2-5.6 11.2-19.2 11.2H720c-13.6 0-16.8-4.8-16.8-8 0-4 5.6-8.8 12-8.8z" fill="#FFFFFF" p-id="9091"></path></svg>`,
    code: `<svg t="1683809588092" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9248" width="48" height="48"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#28A5C6" p-id="9249"></path><path d="M275.2 190.4c0-3.2-3.2-6.4-8-7.2l-15.2-2.4c-4-0.8-8.8-4.8-8.8-8.8l-2.4-15.2c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-2.4 15.2c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 7.2-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c5.6-1.6 8.8-4 8.8-7.2zM823.2 174.4c0-3.2-3.2-6.4-8-7.2l-15.2-2.4c-4-0.8-8.8-4.8-8.8-8.8l-2.4-15.2c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-2.4 15.2c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 7.2-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c5.6-1.6 8.8-4 8.8-7.2z" fill="#FFFFFF" opacity=".5" p-id="9250"></path><path d="M218.4 340c0-7.2-15.2-12-33.6-12H76.8c-8 0-12.8 2.4-12.8 9.6V440c0 17.6 8.8 32 16 32s16-14.4 16-32v-56c0-17.6 8.8-32 28-32h60.8c18.4 0 33.6-4.8 33.6-12z" fill="#EAEAEA" p-id="9251"></path><path d="M80 480c-11.2 0-24-10.4-24-24V348.8C56 328 72.8 312 95.2 312h107.2c13.6 0 21.6 8 21.6 20.8v1.6c0 14.4-9.6 25.6-21.6 25.6H112.8c-4 0-8.8 2.4-8.8 6.4V456c0 13.6-12.8 24-24 24z m15.2-152c-11.2 0-23.2 7.2-23.2 20.8V456c0 4 4.8 8 8 8s8-4 8-8V366.4c0-12.8 11.2-22.4 24.8-22.4h89.6c4 0 5.6-5.6 5.6-9.6v-1.6c0-3.2 0-4.8-5.6-4.8H95.2z" fill="#233E49" p-id="9252"></path><path d="M872 352c0 17.6-14.4 32-32 32H192c-17.6 0-32-14.4-32-32v-24c0-17.6 14.4-32 32-32h648c17.6 0 32 14.4 32 32v24z" fill="#324D5B" p-id="9253"></path><path d="M840 392H192c-22.4 0-40-17.6-40-40v-24c0-22.4 17.6-40 40-40h648c22.4 0 40 17.6 40 40v24c0 22.4-17.6 40-40 40zM192 304c-13.6 0-24 10.4-24 24v24c0 13.6 10.4 24 24 24h648c13.6 0 24-10.4 24-24v-24c0-13.6-10.4-24-24-24H192z" fill="#233E49" p-id="9254"></path><path d="M693.6 588c0 17.6-13.6 32-31.2 32H362.4c-17.6 0-32-14.4-32-32V199.2c0-17.6 14.4-32 32-32H656c17.6 0 32 14.4 32.8 32l4.8 388.8z" fill="#EAEAEA" p-id="9255"></path><path d="M664 628H360c-22.4 0-40-17.6-40-40V199.2c0-22.4 17.6-39.2 40-39.2h304c22.4 0 40 16.8 40 39.2v388.8c0 22.4-17.6 40-40 40zM360 175.2c-13.6 0-24 10.4-24 24v388.8c0 13.6 10.4 24 24 24h304c13.6 0 24-10.4 24-24V199.2c0-13.6-10.4-24-24-24H360z" fill="#233E49" p-id="9256"></path><path d="M648 208H472c-4.8 0-8-3.2-8-8s3.2-8 8-8h176c4.8 0 8 3.2 8 8s-3.2 8-8 8z" fill="#FFFFFF" p-id="9257"></path><path d="M496 264H384c-4.8 0-8-3.2-8-8s4-8 8-8h112c4.8 0 8 3.2 8 8s-4 8-8 8zM640 264H528.8c-4.8 0-8-3.2-8-8s4-8 8-8H640c4.8 0 8 3.2 8 8s-4 8-8 8zM504 304H384c-4.8 0-8-3.2-8-8s4-8 8-8h120c4.8 0 8 3.2 8 8s-4 8-8 8zM648 304H535.2c-4 0-8-3.2-8-8s3.2-8 8-8H648c4 0 8 3.2 8 8s-3.2 8-8 8z" fill="#ADADAD" p-id="9258"></path><path d="M288 776.8c14.4 0 24 14.4 24 32v19.2c0 17.6-9.6 32-24 32s-24-14.4-24-32v-19.2c0-17.6 9.6-32 24-32z" fill="#AD5114" p-id="9259"></path><path d="M288 868c-18.4 0-32-16.8-32-40v-19.2c0-23.2 13.6-40 32-40s32 16.8 32 40v19.2c0 23.2-13.6 40-32 40z m0-83.2c-8.8 0-16 10.4-16 24v19.2c0 13.6 7.2 24 16 24s16-10.4 16-24v-19.2c0-13.6-7.2-24-16-24z" fill="#233E49" p-id="9260"></path><path d="M736 776.8c14.4 0 24 14.4 24 32v19.2c0 17.6-9.6 32-24 32s-24-14.4-24-32v-19.2c0-17.6 9.6-32 24-32z" fill="#AD5114" p-id="9261"></path><path d="M736 868c-18.4 0-32-16.8-32-40v-19.2c0-23.2 13.6-40 32-40s32 16.8 32 40v19.2c0 23.2-13.6 40-32 40z m0-83.2c-8.8 0-16 10.4-16 24v19.2c0 13.6 7.2 24 16 24s16-10.4 16-24v-19.2c0-13.6-7.2-24-16-24z" fill="#233E49" p-id="9262"></path><path d="M872 784.8c1.6 16.8-12 31.2-29.6 31.2H189.6c-17.6 0-30.4-14.4-29.6-31.2l20.8-266.4c1.6-16.8 16.8-30.4 34.4-30.4h602.4c17.6 0 32.8 13.6 34.4 30.4l20 266.4z" fill="#FBD000" p-id="9263"></path><path d="M843.2 824H180.8c-10.4 0-20.8-4-27.2-12-7.2-8-10.4-18.4-9.6-28.8l27.2-272.8c2.4-21.6 20.8-38.4 43.2-38.4h594.4c22.4 0 40.8 16.8 43.2 38.4l27.2 272.8c0.8 10.4-2.4 21.6-9.6 28.8-6.4 8-16 12-26.4 12zM214.4 488c-13.6 0-25.6 10.4-27.2 24L160 784.8c-0.8 6.4 1.6 12 5.6 16.8 4 4 9.6 6.4 16 6.4h661.6c6.4 0 12-2.4 16-6.4 4-4.8 5.6-10.4 5.6-16.8L836.8 512c-1.6-13.6-13.6-24-27.2-24H214.4z" fill="#233E49" p-id="9264"></path><path d="M828 744.8c1.6 17.6-11.2 31.2-28.8 31.2H221.6c-17.6 0-30.4-14.4-28.8-31.2l16.8-190.4c1.6-17.6 17.6-33.6 35.2-33.6H776c17.6 0 33.6 16 35.2 33.6l16.8 190.4z" fill="#415E6D" p-id="9265"></path><path d="M809.6 784H214.4c-8.8 0-16.8-3.2-22.4-9.6-5.6-6.4-8.8-14.4-8-22.4l18.4-206.4c1.6-17.6 17.6-32.8 34.4-32.8h550.4c16.8 0 32.8 15.2 34.4 32.8L840 752c0.8 8.8-1.6 16.8-7.2 22.4-6.4 6.4-14.4 9.6-23.2 9.6zM236.8 528c-8.8 0-17.6 8.8-18.4 18.4L200 752.8c0 4 0.8 8 3.2 10.4 2.4 3.2 6.4 4 10.4 4h596c4 0 8-1.6 10.4-4 2.4-2.4 4-6.4 3.2-10.4l-18.4-206.4c-0.8-9.6-9.6-18.4-18.4-18.4H236.8z" fill="#233E49" p-id="9266"></path><path d="M303.2 576.8m-23.2 0a23.2 23.2 0 1 0 46.4 0 23.2 23.2 0 1 0-46.4 0Z" fill="#FFFFFF" p-id="9267"></path><path d="M304 608c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" fill="#233E49" p-id="9268"></path><path d="M384 576.8m-23.2 0a23.2 23.2 0 1 0 46.4 0 23.2 23.2 0 1 0-46.4 0Z" fill="#FFFFFF" p-id="9269"></path><path d="M384 608.8c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" fill="#233E49" p-id="9270"></path><path d="M465.6 576.8m-23.2 0a23.2 23.2 0 1 0 46.4 0 23.2 23.2 0 1 0-46.4 0Z" fill="#FFFFFF" p-id="9271"></path><path d="M464 608c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" fill="#233E49" p-id="9272"></path><path d="M546.4 576.8m-23.2 0a23.2 23.2 0 1 0 46.4 0 23.2 23.2 0 1 0-46.4 0Z" fill="#FFFFFF" p-id="9273"></path><path d="M544 608c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" fill="#233E49" p-id="9274"></path><path d="M627.2 576.8m-23.2 0a23.2 23.2 0 1 0 46.4 0 23.2 23.2 0 1 0-46.4 0Z" fill="#FFFFFF" p-id="9275"></path><path d="M624 608c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" fill="#233E49" p-id="9276"></path><path d="M344 648m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z" fill="#FFFFFF" p-id="9277"></path><path d="M344 680c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-47.2c-8.8 0-15.2 7.2-15.2 15.2s7.2 15.2 15.2 15.2c8.8 0 15.2-7.2 15.2-15.2s-6.4-15.2-15.2-15.2z" fill="#233E49" p-id="9278"></path><path d="M708 576.8m-23.2 0a23.2 23.2 0 1 0 46.4 0 23.2 23.2 0 1 0-46.4 0Z" fill="#FFFFFF" p-id="9279"></path><path d="M704 608c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" fill="#233E49" p-id="9280"></path><path d="M648 726.4c0 8.8-4.8 17.6-16 17.6H391.2c-11.2 0-23.2-8.8-23.2-17.6V720c0-8.8 12.8-16 23.2-16H632c11.2 0 16 7.2 16 16v6.4z" fill="#FFFFFF" p-id="9281"></path><path d="M632 752H391.2c-14.4 0-31.2-11.2-31.2-25.6V720c0-14.4 16.8-24 31.2-24H632c14.4 0 24 9.6 24 24v7.2c0 12-8 24.8-24 24.8z m-240.8-40c-8 0-15.2 5.6-15.2 8v7.2c0 3.2 7.2 9.6 15.2 9.6H632c7.2 0 8-6.4 8-9.6V720c0-7.2-4.8-8-8-8H391.2z" fill="#233E49" p-id="9282"></path><path d="M832 456c0 17.6-14.4 32-32 32H224c-17.6 0-32-14.4-32-32v-72c0-17.6 14.4-32 32-32h576c17.6 0 32 14.4 32 32v72z" fill="#FBD000" p-id="9283"></path><path d="M784 496H240c-31.2 0-56-24.8-56-56v-40c0-31.2 24.8-56 56-56h544c31.2 0 56 24.8 56 56v40c0 31.2-24.8 56-56 56zM240 360c-22.4 0-40 17.6-40 40v40c0 22.4 17.6 40 40 40h544c22.4 0 40-17.6 40-40v-40c0-22.4-17.6-40-40-40H240z" fill="#233E49" p-id="9284"></path><path d="M388.8 360c14.4 48 65.6 99.2 126.4 99.2C576 459.2 628 408 641.6 360" fill="#324D5B" p-id="9285"></path><path d="M515.2 464c-64.8 0-119.2-52-134.4-102.4-1.6-4 0.8-8.8 5.6-9.6 4-1.6 8.8 0.8 9.6 5.6 12.8 44 62.4 91.2 119.2 91.2 56.8 0 105.6-47.2 119.2-91.2 1.6-4 5.6-6.4 9.6-5.6 4 1.6 6.4 5.6 5.6 9.6C634.4 412 580 464 515.2 464z" fill="#233E49" p-id="9286"></path><path d="M800 450.4c-4.8 0-8-3.2-8-8v-30.4c0-16-7.2-20-18.4-20H676.8c-4.8 0-8-3.2-8-8s4-8 8-8h96.8c22.4 0 34.4 12.8 34.4 36v30.4c0 4-4 8-8 8zM360 392H240c-4 0-8-3.2-8-8s3.2-8 8-8h120c4 0 8 3.2 8 8s-3.2 8-8 8z" fill="#FFFFFF" p-id="9287"></path><path d="M796 744c-4 0-7.2-3.2-8-7.2l-16-176c0-4.8 3.2-8 7.2-8.8 4-0.8 8 3.2 8.8 7.2l16 176c0 4.8-3.2 8-8 8.8zM480 112c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zM944 512c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" fill="#FFFFFF" opacity=".5" p-id="9288"></path><path d="M976 872H40c-4.8 0-8-3.2-8-8s4-8 8-8h936c4.8 0 8 3.2 8 8s-4 8-8 8z" fill="#233E49" p-id="9289"></path><path d="M424 648m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z" fill="#FFFFFF" p-id="9290"></path><path d="M424 680c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-47.2c-8.8 0-15.2 7.2-15.2 15.2s7.2 15.2 15.2 15.2c8.8 0 15.2-7.2 15.2-15.2s-6.4-15.2-15.2-15.2z" fill="#233E49" p-id="9291"></path><path d="M504 648m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z" fill="#FFFFFF" p-id="9292"></path><path d="M504 680c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-47.2c-8.8 0-15.2 7.2-15.2 15.2s7.2 15.2 15.2 15.2c8.8 0 15.2-7.2 15.2-15.2s-6.4-15.2-15.2-15.2z" fill="#233E49" p-id="9293"></path><path d="M584 648m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z" fill="#FFFFFF" p-id="9294"></path><path d="M584 680c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-47.2c-8.8 0-15.2 7.2-15.2 15.2s7.2 15.2 15.2 15.2c8.8 0 15.2-7.2 15.2-15.2s-6.4-15.2-15.2-15.2z" fill="#233E49" p-id="9295"></path><path d="M664 648m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z" fill="#FFFFFF" p-id="9296"></path><path d="M664 680c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-47.2c-8.8 0-15.2 7.2-15.2 15.2s7.2 15.2 15.2 15.2c8.8 0 15.2-7.2 15.2-15.2s-6.4-15.2-15.2-15.2z" fill="#233E49" p-id="9297"></path></svg>`,
    brain: `<svg t="1683809642703" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9450" width="48" height="48"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FBD000" p-id="9451"></path><path d="M129.6 576c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48.8c-9.6 0-16.8 8-16.8 16.8 0 9.6 7.2 16.8 16.8 16.8 9.6 0 16.8-8 16.8-16.8 0-9.6-7.2-16.8-16.8-16.8zM880.8 663.2c-17.6 0-31.2-14.4-31.2-31.2 0-17.6 14.4-31.2 31.2-31.2 17.6 0 31.2 14.4 31.2 31.2 0.8 16.8-13.6 31.2-31.2 31.2z m0-48.8c-9.6 0-16.8 7.2-16.8 16.8 0 9.6 7.2 16.8 16.8 16.8 9.6 0 16.8-7.2 16.8-16.8 0-8.8-7.2-16.8-16.8-16.8zM432.8 951.2c-17.6 0-31.2-14.4-31.2-31.2 0-17.6 14.4-31.2 31.2-31.2 17.6 0 31.2 14.4 31.2 31.2 0.8 16.8-13.6 31.2-31.2 31.2z m0-48.8c-9.6 0-16.8 7.2-16.8 16.8 0 9.6 7.2 16.8 16.8 16.8 9.6 0 16.8-7.2 16.8-16.8 0-8.8-7.2-16.8-16.8-16.8zM383.2 136.8c-19.2 0-34.4-15.2-34.4-34.4s15.2-34.4 34.4-34.4 34.4 15.2 34.4 34.4c-0.8 19.2-16 34.4-34.4 34.4z m0-52c-10.4 0-18.4 8-18.4 18.4 0 10.4 8 18.4 18.4 18.4 10.4 0 18.4-8 18.4-18.4-0.8-10.4-8.8-18.4-18.4-18.4zM771.2 272.8c0-3.2 3.2-6.4 8-7.2L793.6 264c4-0.8 8.8-4.8 8.8-8.8l2.4-15.2c0.8-4 4-8 7.2-8s6.4 3.2 7.2 8l2.4 15.2c0.8 4 4.8 8.8 8.8 8.8l15.2 2.4c4 0.8 8 4 8 7.2s-3.2 6.4-8 7.2l-15.2 2.4c-4 0.8-8.8 4.8-8.8 8.8l-2.4 15.2c-0.8 4-4 8-7.2 8s-6.4-3.2-7.2-8l-2.4-16.8c-0.8-4-4.8-8-8.8-8.8l-14.4-0.8c-4.8-1.6-8-4.8-8-8zM152 772c0-3.2 3.2-6.4 8-7.2l15.2-2.4c4-0.8 8.8-4.8 8.8-8.8l2.4-15.2c0.8-4 4-8 7.2-8s6.4 3.2 7.2 8l2.4 15.2c0.8 4 4.8 8.8 8.8 8.8l15.2 2.4c4 0.8 8 4 8 7.2s-3.2 6.4-8 7.2l-15.2 2.4c-4 0.8-8.8 4.8-8.8 8.8l-2.4 15.2c-0.8 4-4 8-7.2 8s-6.4-3.2-7.2-8l-2.4-16.8c-0.8-4-4.8-8-8.8-8.8l-14.4-0.8c-4.8-1.6-8.8-4-8.8-7.2zM683.2 832.8c0-3.2 3.2-6.4 8-7.2l15.2-2.4c4-0.8 8.8-4.8 8.8-8.8l2.4-15.2c0.8-4 4-8 7.2-8s6.4 3.2 7.2 8l2.4 15.2c0.8 4 4.8 8.8 8.8 8.8l15.2 2.4c4 0.8 8 4 8 7.2s-3.2 6.4-8 7.2l-15.2 2.4c-4 0.8-8.8 4.8-8.8 8.8l-2.4 15.2c-0.8 4-4 8-7.2 8s-6.4-3.2-7.2-8l-2.4-16.8c-0.8-4-4.8-8-8.8-8.8l-14.4-0.8c-4.8-0.8-8.8-4-8.8-7.2z" fill="#FFFFFF" p-id="9452"></path><path d="M348 635.2v117.6c0 12 9.6 22.4 21.6 22.4l229.6 80c12 0 21.6-9.6 21.6-22.4V707.2s33.6 3.2 65.6 0c32-3.2 56-36.8 56-60.8s4.8-76 4.8-76l56.8-32.8c11.2-6.4 14.4-20 8-31.2 0 0-35.2-60.8-55.2-96-4-6.4-7.2-18.4-9.6-28.8-0.8-8-2.4-15.2-4-22.4v-1.6c-27.2-113.6-130.4-198.4-252.8-198.4-144 0-260 116-260 260 0.8 89.6 47.2 169.6 117.6 216z" fill="#3AD0F9" p-id="9453"></path><path d="M484.8 638.4C661.6 682.4 736.8 664 736.8 664s-5.6 49.6-118.4 42.4V768s-69.6-14.4-148-54.4-124-74.4-124-74.4l6.4-3.2c-33.6-20-60-43.2-74.4-72.8-41.6-84-44-96-44-96s77.6 128 250.4 171.2z" fill="#00B3F9" p-id="9454"></path><path d="M604.8 864c-1.6 0-4 0-5.6-0.8-13.6-3.2-218.4-75.2-230.4-80-8-3.2-27.2-10.4-27.2-29.6V640.8C268.8 590.4 225.6 508 225.6 420 225.6 272 345.6 152 492.8 152c80.8 0 147.2 26.4 196 78.4 50.4 53.6 65.6 118.4 64.8 129.6-0.8 15.2 7.2 51.2 10.4 56 19.2 33.6 56.8 85.6 56.8 85.6s0 0.8 0.8 0.8c4 7.2 5.6 15.2 3.2 23.2-2.4 8-7.2 14.4-14.4 18.4l-52.8 32c0 13.6-0.8 52.8-4.8 73.6-5.6 29.6-28 64-63.2 67.2-9.6 0.8-20.8 1.6-32 1.6s-20-0.8-26.4-0.8v116c0 7.2-2.4 14.4-6.4 20-5.6 6.4-12 10.4-20 10.4z m-112-696C354.4 168 241.6 280.8 241.6 420c0 84.8 42.4 163.2 113.6 210.4 2.4 1.6 3.2 4 3.2 6.4v116.8c0 5.6 4.8 10.4 16.8 14.4 11.2 4 215.2 76.8 228 79.2h2.4c2.4 0 4.8-1.6 6.4-4 2.4-3.2 3.2-7.2 3.2-10.4V708.8c0-2.4 0.8-4 2.4-5.6 1.6-1.6 4-2.4 6.4-2.4 0 0 15.2 1.6 33.6 1.6 11.2 0 21.6-0.8 30.4-1.6 28.8-3.2 44.8-34.4 48.8-54.4 4.8-22.4 4.8-74.4 4.8-74.4 0-3.2 1.6-5.6 4-7.2l56.8-32.8c3.2-1.6 5.6-4.8 7.2-8.8 0.8-4 0.8-8-1.6-11.2-4-4.8-38.4-53.6-57.6-87.2-4.8-8.8-13.6-47.2-12.8-65.6 0-5.6-11.2-65.6-60.8-118.4-45.6-48-107.2-72.8-184-72.8z" fill="#0C508E" p-id="9455"></path><path d="M298.4 348c0-36 29.6-65.6 65.6-65.6 3.2 0 5.6 0 8.8 0.8 6.4-28.8 32.8-50.4 64-50.4 3.2 0 6.4 0 9.6 0.8 8-7.2 18.4-11.2 30.4-11.2 8.8 0 16.8 2.4 24 7.2 11.2-4.8 23.2-8 36-8 28 0 52 13.6 67.2 33.6 1.6 0 4-0.8 5.6-0.8 16.8 0 31.2 12.8 32.8 29.6 19.2 11.2 32 32 32 56 0 20-8.8 38.4-23.2 50.4v4c0 23.2-17.6 42.4-40 45.6-10.4 22.4-32.8 37.6-59.2 37.6-8.8 0-16.8-1.6-24-4.8-6.4 8-15.2 12.8-25.6 12.8-9.6 0-18.4-4.8-24.8-11.2-7.2 3.2-15.2 4.8-24 4.8-5.6 0-11.2-0.8-16.8-2.4-3.2 7.2-7.2 17.6-7.2 31.2 0 26.4-7.2 32-17.6 15.2-8-12.8-16.8-28-22.4-43.2-2.4 0-4.8 0.8-7.2 0.8-36 0-65.6-29.6-65.6-65.6 0-6.4 0.8-12.8 3.2-19.2-13.6-12-21.6-28.8-21.6-48z" fill="#FFFFFF" p-id="9456"></path><path d="M431.2 362.4l4 14.4-9.6 9.6c1.6 4 4 8 6.4 11.2l12.8-3.2 10.4 10.4-3.2 12.8c4 2.4 7.2 4.8 11.2 6.4l9.6-9.6 14.4 4 3.2 12.8h12.8l3.2-12.8 14.4-4 9.6 9.6c4-1.6 8-4 11.2-6.4l-3.2-12.8 10.4-10.4 12.8 3.2c2.4-4 4.8-7.2 6.4-11.2l-7.2-10.4 4-14.4 12.8-3.2v-13.6l-12.8-3.2-4-14.4 9.6-9.6c-1.6-4-4-8-6.4-11.2l-12.8 3.2-10.4-10.4 3.2-12.8c-4-2.4-7.2-4.8-11.2-6.4L521.6 288.8l-14.4-4-3.2-12.8h-12.8l-3.2 12.8-14.4 4-10.4-8.8c-4 1.6-8 4-11.2 6.4l3.2 12.8-10.4 10.4-12.8-3.2c-2.4 4-4.8 7.2-6.4 11.2l9.6 9.6-4 14.4-13.6 4v13.6l13.6 3.2z m28-20.8c5.6-21.6 27.2-33.6 48.8-28 21.6 5.6 33.6 28 28 48.8-5.6 21.6-27.2 33.6-48.8 28-20.8-5.6-33.6-27.2-28-48.8z" fill="#0C508E" p-id="9457"></path><path d="M422.4 540.8c-8 0-13.6-7.2-16.8-12.8-8.8-13.6-16-27.2-20.8-39.2h-2.4c-40.8 0-73.6-32.8-73.6-73.6 0-5.6 0.8-11.2 1.6-16.8a72.8 72.8 0 0 1-20-50.4c0-40.8 32.8-73.6 73.6-73.6h3.2c9.6-29.6 37.6-50.4 69.6-50.4h7.2c16-12 39.2-14.4 57.6-5.6 11.2-4.8 23.2-7.2 35.2-7.2 28 0 53.6 12 71.2 33.6h2.4c20 0 36 13.6 40 32.8 20.8 13.6 32.8 36 32.8 60.8 0 20-8.8 39.2-23.2 53.6v0.8c0 25.6-18.4 47.2-42.4 52.8-12.8 24-37.6 38.4-64.8 38.4-7.2 0-14.4-0.8-21.6-3.2-8 7.2-17.6 11.2-28 11.2-9.6 0-19.2-4-27.2-10.4-11.2 3.2-22.4 4-33.6 2.4-2.4 7.2-4 14.4-4 21.6-0.8 10.4-0.8 35.2-16 35.2zM389.6 472c3.2 0 6.4 2.4 7.2 4.8 4.8 12.8 12 26.4 21.6 41.6 0.8 0.8 1.6 2.4 1.6 2.4 0.8-2.4 0.8-7.2 0.8-13.6 0-12 2.4-23.2 8-34.4 1.6-3.2 5.6-5.6 9.6-4 12.8 3.2 24 2.4 36-2.4 3.2-1.6 6.4 0 8.8 2.4 4.8 5.6 12 8.8 18.4 8.8 8 0 14.4-3.2 19.2-9.6 2.4-3.2 5.6-4 9.6-2.4 7.2 2.4 13.6 4 20.8 4 22.4 0 42.4-12.8 52-33.6 0.8-2.4 3.2-4 6.4-4.8 19.2-2.4 32.8-18.4 32.8-37.6v-4c0-2.4 0.8-5.6 3.2-7.2 12.8-11.2 20.8-27.2 20.8-44 0-20-10.4-38.4-28-49.6-2.4-1.6-3.2-3.2-4-6.4-1.6-12.8-12-22.4-24.8-22.4-1.6 0-2.4 0-4.8 0.8-3.2 0.8-6.4-0.8-8-3.2-14.4-19.2-36.8-30.4-60.8-30.4-11.2 0-22.4 2.4-32 7.2-2.4 0.8-5.6 0.8-7.2-0.8-13.6-8.8-32.8-7.2-44.8 4-1.6 1.6-4 2.4-6.4 1.6-3.2-0.8-5.6-0.8-8.8-0.8-27.2 0-49.6 18.4-56 44.8-0.8 4-4.8 6.4-8.8 6.4-3.2-0.8-5.6-0.8-8-0.8-32 0-57.6 25.6-57.6 57.6 0 16 6.4 31.2 18.4 41.6 2.4 2.4 3.2 5.6 2.4 8-1.6 5.6-2.4 11.2-2.4 16.8 0 32 25.6 57.6 57.6 57.6 2.4 0 4.8 0 6.4-0.8 0 2.4 0 2.4 0.8 2.4z" fill="#0C508E" p-id="9458"></path><path d="M304.8 512c-2.4 0-4.8-0.8-6.4-3.2-37.6-43.2-32-114.4-32-117.6 0.8-4.8 4.8-8 8.8-7.2 4.8 0 8 4 8 8.8 0 0.8-5.6 67.2 28 105.6 3.2 3.2 2.4 8.8-0.8 12-1.6 0.8-3.2 1.6-5.6 1.6z" fill="#FFFFFF" opacity=".5" p-id="9459"></path></svg>`,
}
// 创建选项卡
var tabs = ['masks', 'P', 'B', 'C', 'S'];
for (var i = 0; i < tabs.length; i++) {
    var tab = document.createElement('div');
    tab.className = `${clsprefix}-tab`;
    if (icons[tabs[i]]) {
        tab.innerHTML = icons[tabs[i]];
        tab.style.borderLeft = '0';
    } else {
        tab.innerText = tabs[i];
    }
    tab.setAttribute('data-index', i);
    sidebar.appendChild(tab);

    // 点击选项卡切换container
    tab.addEventListener('click', function () {
        var index = this.getAttribute('data-index');
        setActiveTab(index);
        if (index == 1) {
            var currentContainer = document.querySelector(`.${clsprefix}-container_${index}`)
            setContainer(currentContainer);
        }
    });
}

function createIframe(src) {
    var iframe = document.createElement('iframe');
    iframe.className = `${clsprefix}-container-iframe`;
    iframe.src = src;
    return iframe;
}

// 创建container
var containers = document.createElement('div');
containers.id = 'containers';

for (var i = 0; i < tabs.length; i++) {
    var container = document.createElement('div');
    container.className = `${clsprefix}-container ${clsprefix}-container_${i}`;
    containers.appendChild(container);
}

// 将侧边栏和container添加到页面中
// document.body.innerHTML = '';
document.body.appendChild(sidebar);
document.body.appendChild(containers);

// 初始化选中第一个选项卡
setActiveTab(0);
setIntro(containers.childNodes[0]);

// 设置选中的选项卡和对应的container
function setActiveTab(index) {
    var tabs = document.querySelectorAll(`.${clsprefix}-tab`);
    var containers = document.querySelectorAll(`.${clsprefix}-container`);

    if (tabs[index].classList.contains('active')) {
        tabs[index].classList.remove('active');
        containers[index].style.display = 'none';
    } else {
        // 取消之前选中的选项卡和container
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
            containers[i].style.display = 'none';
        }

        // 设置当前选中的选项卡和对应的container
        tabs[index].classList.add('active');
        containers[index].style.display = index > 0 ? 'flex' : 'block';
    }
}

function setContainer(container) {
    // Create elements
    const leftCol = document.createElement('div');
    const rightCol = document.createElement('div');
    const leftRow1 = document.createElement('div');
    const leftRow1Select = document.createElement('select');
    const leftRow1Desc = document.createElement('div');
    const leftRow1Left = document.createElement('div');
    const leftRow1Right = document.createElement('div');
    const leftRow2 = document.createElement('div');
    const leftRow2Label = document.createElement('div');
    const leftRow2TextArea = document.createElement('textarea');
    const leftRow3 = document.createElement('div');
    const leftRow3Label = document.createElement('div');
    const leftRow3TextArea = document.createElement('textarea');
    const leftRow4 = document.createElement('div');
    const leftRow4Label = document.createElement('div');
    const leftRow4TextArea = document.createElement('textarea');

    // Add classes
    leftCol.classList.add(`${clsprefix}-left-col`);
    rightCol.classList.add(`${clsprefix}-right-col`);
    leftRow1.classList.add(`${clsprefix}-left-row`);
    leftRow1Left.classList.add(`${clsprefix}-left-row-left`);
    leftRow1Right.classList.add(`${clsprefix}-left-row-right`);
    leftRow2.classList.add(`${clsprefix}-left-row`);
    leftRow3.classList.add(`${clsprefix}-left-row`);
    leftRow4.classList.add(`${clsprefix}-left-row`);
    leftRow1.classList.add(`${clsprefix}-left-row-header`);

    // Add content
    leftRow1Select.innerHTML = `
  <option value="summary">文本总结翻译</option>
  <option value="code-generation">文本代码生成</option>
  <option value="problem-solving">解题模型推理</option>
`;
    leftRow2Label.textContent = '你想让AI扮演什么角色？';
    leftRow3Label.textContent = '对输出的要求是什么？';
    leftRow4Label.textContent = '你想让他扮演什么角色？';

    // Add elements to DOM
    var currentPage = createIframe(location.href);
    rightCol.append(currentPage);
    container.appendChild(leftCol);
    container.appendChild(rightCol);
    leftCol.appendChild(leftRow1);
    leftCol.appendChild(leftRow2);
    leftCol.appendChild(leftRow3);
    leftCol.appendChild(leftRow4);
    leftRow1Left.appendChild(leftRow1Select);
    leftRow1Left.appendChild(leftRow1Desc);
    leftRow1.appendChild(leftRow1Left);
    leftRow1.appendChild(leftRow1Right);
    leftRow2.appendChild(leftRow2Label);
    leftRow2.appendChild(leftRow2TextArea);
    leftRow3.appendChild(leftRow3Label);
    leftRow3.appendChild(leftRow3TextArea);
    leftRow4.appendChild(leftRow4Label);
    leftRow4.appendChild(leftRow4TextArea);

    // Set default values
    const descMap = {
        'summary': '提取文本知识，翻译文本内容',
        'code-generation': '编故事写小说，生成代码',
        'problem-solving': '问题求解，解释重构代码',
    };
    const iconMap = {
        'summary': icons['text'],
        'code-generation': icons['code'],
        'problem-solving': icons['brain'],
    };
    leftRow1Desc.textContent = descMap[leftRow1Select.value];
    leftRow1Select.addEventListener('change', e => {
        leftRow1Desc.textContent = descMap[e.target.value];
        leftRow1Right.innerHTML = iconMap[e.target.value];
    });
    leftRow2TextArea.rows = 3;
    leftRow3TextArea.rows = 6;
    leftRow4TextArea.rows = 12;
}

function addTitle(titleContainer) {
    var titleArr = ['Create', 'Effective', 'GPT', 'Prompts'];
    for (var i = 0; i < titleArr.length; i++) {
        var titleSpan = document.createElement('span');
        titleSpan.innerText = titleArr[i];
        titleSpan.id = `title-${i}`;
        titleContainer.appendChild(titleSpan);
    }
}

function addDesc(container, text) {
    const txt = document.createElement('p');
    txt.classList.add(`${clsprefix}-desc`);
    txt.innerHTML = text;
    container.appendChild(txt);
}
function setIntro(container) {
    // Create elements
    const title = document.createElement('div');
    title.classList.add(`${clsprefix}-title`);
    addTitle(title);
    container.appendChild(title);
    setTimeout(() => {
        title.classList.add(`active`);
        const logo = document.createElement('div');
        logo.classList.add(`${clsprefix}-title`);
        logo.innerHTML = icons['masks'];
        container.appendChild(logo);
        addDesc(container, "Rule1: - Make Clear and specific instructions, clear != short, ask format output or use Few-shot");
        addDesc(container, "Rule2: - Give model time to think, Specify the step or Order the model to work out");
    }, 1500);
}