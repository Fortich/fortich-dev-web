from firebase_functions import https_fn
import PIL.Image
import PIL.ExifTags
import flask

def process(req: https_fn.Request) -> https_fn.Response:
    try:
        image_file_stream = req.files.get("image").stream
    except AttributeError:
        return https_fn.Response(status=400, response="No image uploaded")
    try:
        pil_image = PIL.Image.open(image_file_stream)
    except PIL.UnidentifiedImageError:
        return https_fn.Response(status=400, response="Invalid image")
    if pil_image.getexif() is None:
        return flask.jsonify({})
    exif = {
        str(PIL.ExifTags.TAGS[k]): str(v)
        for k, v in pil_image.getexif().items()
        if k in PIL.ExifTags.TAGS
    }
    print(exif)
    return flask.jsonify(exif)