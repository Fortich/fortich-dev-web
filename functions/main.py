from firebase_functions import https_fn,  options
from firebase_admin import initialize_app

import image_processing

initialize_app()


@https_fn.on_request(
    cors=options.CorsOptions(
        cors_origins=[r"fortich\.dev$", r"https://fortich\.dev", r"localhost:3000", r"http://localhost:3000"],
        cors_methods=["post"],
    )
)
def process_image(req: https_fn.Request) -> https_fn.Response:
    return image_processing.process(req)