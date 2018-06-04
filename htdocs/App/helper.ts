namespace Helper {
    console.log('helper.ts');
    const _cacheHTML: Map<string, string> = new Map<string, string>();
    // for links
    export const getParameterByName = (name: string) => {
        const url = window.location.href;
        const pureName = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp(`[?&]${pureName}(=([^&#]*)|&|#|$)`);
        const result = regex.exec(url);
        if (!result) {
            console.log('undefined');

            return undefined;
        }
        if (!result[2]) {
            console.log('empty');

            return '';
        }
        console.log(result[0]);

        return decodeURIComponent(result[2].replace(/\+/g, ' '));
    };

    export const removeParams = () => {
        window.location.href = window.location.origin + window.location.hash;
    };
    // for templates
    export const getHTMLTemplateOld = (file: string) => {
        let templateHTML = 'fail';
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            // tslint:disable-next-line:no-invalid-this
            if (this.readyState === 4 && this.status === 200) {
                // tslint:disable-next-line:no-invalid-this
                templateHTML = this.responseText;
                // console.log(templateHTML);
            }
        };
        xmlHttp.open('GET', file, false);
        xmlHttp.send();

        return templateHTML;
    };
    export const fetchContent = async(file: string) => {
        const response = await fetch(file);
        const templateHTML = await response.text();

        return templateHTML;
    };

    export const getHTMLTemplate = async(name: string) => {
        if (!_cacheHTML.has(name)) {
            const content =  await fetchContent(`templates/${name}-template.html`);
            if (content) {
                _cacheHTML.set(name, content);
            } else {
                alert("error");
            }
        }

        return _cacheHTML.get(name);
    };

    export const parseHTMLString =
        (target: string, mustache: string, content: string) => {
            return target.replace(mustache, content);
    };
}
