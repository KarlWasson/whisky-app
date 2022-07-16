import * as shell from 'shelljs';

// copy all view templates
shell.cp( '-R', 'src/views', 'dist/' )