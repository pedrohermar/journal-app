import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";
import { getEnvironments } from '../../src/helpers/getEnvironments';

const {
    VITE_CLOUD_NAME,
    VITE_API_KEY,
    VITE_API_SECRET
} = getEnvironments()

cloudinary.config({
    cloud_name: VITE_CLOUD_NAME,
    api_key: VITE_API_KEY,
    api_secret: VITE_API_SECRET,
    secure: true
});

describe('Pruebas en fileUpload', () => {

    test('Debe subir el archivo correctamente a Cloudinary', async() => { 

        const imageUrl = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'Hornet.jpg');

        const url = await fileUpload( file );
        expect( typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');
        const pathImage = 'journal/' + imageId
        
        const cloudResp = await cloudinary.api.delete_resources([pathImage], {
            resource_type: 'image'
        });
        expect(cloudResp.deleted[pathImage]).toBe('deleted');

     });

     test('Debe devolver null', async() => { 

        const file = new File([], 'Hornet.jpg');
        const url = await fileUpload( file );
        
        expect( url).toBe( null );

      })

})