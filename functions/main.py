from firebase_functions import https_fn
from firebase_admin import initialize_app

import image_processing

initialize_app()


@https_fn.on_request()
def process_image(req: https_fn.Request) -> https_fn.Response:
    return image_processing.process(req)