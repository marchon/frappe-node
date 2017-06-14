export const get_args = (data = null, sid = null) => {
	let args = {
		method: "POST",
		headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
	};

	//append body if exists
	if (data) {
		args["data"] = data;
		args["headers"] = { 'Accept': 'application/json', 'Content-Type': 'multipart/form-data' };
	}

	//append if sid exists 
	if (sid) {
		args["cookies"] = { 'sid': sid.split(';')[0].split('=')[1]};
	}

	return args;
}

export const get_domain = (site_name) => {
	if (site_name) {
		const domain = `http://${site_name}`;
		return domain.trim();
	}
	return null;
}

export const get_data = (doctype, data) => {
	return {
		"doctype": doctype,
		"data": data ? data : null
	};
}


export const console_message = (msg) => {
	console.log(msg);
}





