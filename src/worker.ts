// Define constants for HTTP status codes
const MOVED_PERMANENTLY: number = 301;
const TEMPORARY_REDIRECT: number = 307;

// Define the base URL for the unshorten service
const base: string = 'https://unshorten.me/json/';

const isValidUrl = (url: string): boolean => {
	const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:www\.)?(?:[a-z0-9-]+\.?)+[a-z]{2,}(?::\d{2,5})?(?:[/?#]\S*)?$/i;
	return urlRegex.test(url);
};

const errorResponse = (requestedUrl: string, error: string): Response => {
	return Response.json({
		requested_url: requestedUrl,
		success: false,
		resolved_url: '',
		error: error,
	});
};

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// Extract the path (without /), query parameters, and fragment from the incoming request URL
		const url = new URL(request.url);
		const pathAndMore: string = url.pathname.substring(1) + url.search + url.hash;

		if (!isValidUrl(pathAndMore)) {
			return errorResponse(pathAndMore, 'Invalid URL. Use /your-short-url');
		}

		// Construct the destination URL by appending the path, query parameters, and fragment to the base URL
		const destinationURL: string = base + pathAndMore;

		// Perform a temporary redirect to the destination URL
		return Response.redirect(destinationURL, TEMPORARY_REDIRECT);
	},
};
